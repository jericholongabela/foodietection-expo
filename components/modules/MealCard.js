import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native'
import { Icon, Overlay } from '@rneui/themed';
import colors from '../../assets/styles/colors'

import overlayStyles from '../../assets/styles/overlay';
import { FlatList } from 'react-native-gesture-handler';
import searchStyles from '../../assets/styles/search';
import SuggestionResult from './recommendationResult';
import { Context } from "../global_context/GlobalContext";
import recommendation from '../fuzzy/foodlist';
import { useNavigation } from '@react-navigation/native';

export default function MealCard({foodName, foodCategory, foodServing, foodServingUnit, foodServingWeight, foodCalories, foodImage, totalCalories}){
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Food Information", { data: foodName})}>
            <View style={styles.cardContainer}>
                <View style={styles.topPartContainer}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: colors.primary_black,
                    }}>{foodName}</Text>
                    <View style={styles.foodCategoryContainer}>
                        {foodCategory === "GO" ? <Text style={styles.foodCategoryGo}>{foodCategory}</Text> : null}
                        {foodCategory === "GO and GROW" ?
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            <Text style={{color: colors.yellow_shade_3}}>GO</Text>,
                            <Text style={{color: colors.red_shade_1}}> GROW</Text>
                        </Text>: null}
                        {foodCategory === "GO and GLOW" ?
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            <Text style={{color: colors.yellow_shade_3}}>GO</Text>,
                            <Text style={{color: colors.green_shade_3}}> GLOW</Text>
                        </Text>: null}
                        {foodCategory === "GROW and GLOW" ?
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            <Text style={{color: colors.red_shade_1}}>GROW</Text>,
                            <Text style={{color: colors.green_shade_3}}> GLOW</Text>
                        </Text>: null}
                        {foodCategory === "GROW" ? <Text style={styles.foodCategoryGrow}>{foodCategory}</Text> : null}
                        {foodCategory === "GLOW" ? <Text style={styles.foodCategoryGlow}>{foodCategory}</Text> : null}    
                    </View>   
                </View>
                <View style={styles.bottomPartContainer}>
                    <View style={styles.foodImageContainer}>
                        <Image source={{uri: foodImage}} style={styles.foodImage}/>
                    </View> 
                    <View style={{paddingHorizontal: 10, width: Dimensions.get('screen').width *.55}}>
                        <View style={styles.servingSizeContainer}>
                            <Text style={styles.servingtextStyle}>Serving Size: </Text>
                            <Text style={{
                                fontSize: 14,
                                color: colors.gray_shade_2,
                                width: 150,
                            }}>{foodServing}{foodServingUnit} ({foodServingWeight}g)</Text>
                        </View>
                        <View style={{justifyContent: 'flex-end', alignContent: 'flex-end'}}>
                            <Text style={styles.textStyle}>Calories per Serving</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 40,}}>{foodCalories}</Text>
                            <Text style={styles.regulartextStyle}>Click card for more details</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function ViewSuggestion({ inputText }){
    const { foodrecommendation, setFoodRecommendation} = useContext(Context);
    const { suggestionOverlay, setSuggestionOverlay } = useContext(Context);
    const toggleOverlay = () => {
        setSuggestionOverlay(!suggestionOverlay);
        getFoodData();
    }
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState();
    const customData = require('../../assets/foodList/recommendation.json');

    let url = 'https://trackapi.nutritionix.com/v2/search/instant?query=' + "Brocolli, Cabbage, Tomato, Grapes" ;
    let header = new Headers ();
    header.append('x-app-id', 'dc8f2b01')
    header.append('x-app-key', '7ca38ca16b834b43a0242fd71259adb5')

    let options = {
        method: 'GET',
        headers: header,
        mode: 'cors',
    }
    let fn = recommendation(foodrecommendation);
    let request = new Request (url, options)

    function getFoodData (){
        setLoading(true);
        fetch(request)
            .then((response) => response.json())
            .then((json) => {
                setData(json.common);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(() => setLoading(false))    
    }

    const onSearch = () => {
        getFoodData();
    }
    
    return (
        <>
        <View style={styles.viewSuggestionContainer}>
            <TouchableOpacity style={styles.viewSuggestionButton} onPress={toggleOverlay}>
                <Text style={styles.buttonText}>View Suggestions</Text>
            </TouchableOpacity>
            <Overlay isVisible={suggestionOverlay} onBackdropPress={toggleOverlay} overlayStyle={overlayStyles.overlay}>
                <View style={{alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24, marginLeft: 15,}}>Suggestions:</Text>
                    <Icon name="close" size={30} color={colors.primary_black} onPress={toggleOverlay} />
                </View>
            { isLoading ? (<ActivityIndicator />) : (
                    <FlatList 
                    contentContainerStyle={searchStyles.list}
                    data={fn.foods}
                    keyExtractor={({ item }, tag_id) => item}
                    renderItem={({ item }) => (
                    <SuggestionResult foodName={item.food}/>
                    )}
                    />
            )}
                <Text style={{fontSize: 16}}>
                    <Text style={{color: colors.red_shade_1, fontWeight: 'bold'}}>Reminder: </Text>
                    <Text>{inputText}</Text>
                    <Text> Such as the ones we provided above.</Text>
                </Text>
            </Overlay>
        </View>  
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: Dimensions.get('window').height * 0.275,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: colors.primary_white,
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    }, 
    textStyle: {
        //fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary_black,
    },
    regulartextStyle: {
        //fontFamily: 'Montserrat',
        marginTop: 15,
        fontSize: 14,
        color: colors.primary_black,
    },
    servingtextStyle: {
        //fontFamily: 'Montserrat',
        fontSize: 14,
        color: colors.gray_shade_2,
    },
    topPartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomPartContainer: {
        flexDirection: 'row',
    },
    foodCategoryGo: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.yellow_shade_3,
    },
    foodCategoryGrow: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.red_shade_2,
    },
    foodCategoryGlow: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.green_shade_3,
    },
    foodCategoryContainer: {
        height: Dimensions.get('window').height * 0.0375,
        width: Dimensions.get('window').width * 0.2,
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
    },
    servingSizeContainer: {
        flexDirection: 'row',
    },
    calorieContainer: {
        flexDirection: 'column',
    },
    foodImageContainer: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.3,
        justifyContent: 'center',
        alignContent: 'center',
    },
    foodImage: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.3,
        resizeMode: 'cover',
    },

    viewSuggestionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    viewSuggestionButton: {
        width: Dimensions.get('window').width*0.9,
        height: Dimensions.get('window').height*0.07,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: colors.primary_white,
    },

    buttonText: {
        //fontFamily: 'Montserrat-Bold',
        fontSize: 19,
        paddingRight: 30,
        color: colors.primary_black,
    },
})