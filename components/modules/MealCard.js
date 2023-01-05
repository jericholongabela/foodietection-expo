import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native'
import { Overlay } from '@rneui/base'
import colors from '../../assets/styles/colors'

import overlayStyles from '../../assets/styles/overlay';
import { FlatList } from 'react-native-gesture-handler';
import searchStyles from '../../assets/styles/search';
import SearchResult from './searchResult';

export default function MealCard({foodName, foodCategory, foodServing, foodServingUnit, foodServingWeight, foodCalories, foodImage, totalCalories}){
    return (
        <TouchableOpacity>
            <View style={styles.cardContainer}>
                <View style={styles.topPartContainer}>
                    <Text style={styles.textStyle}>{foodName}</Text>
                    <View style={styles.foodCategoryContainer}>
                        <Text style={styles.foodCategoryText}>{foodCategory}</Text>
                    </View>   
                </View>
                <View style={styles.bottomPartContainer}>
                    <View style={styles.foodImageContainer}>
                        <Image source={{uri: foodImage}} style={styles.foodImage} resizeMode={'cover'}/>
                    </View> 
                    <View>
                        <View style={styles.servingSizeContainer}>
                            <Text style={styles.servingtextStyle}>Serving Size: </Text>
                            <Text style={styles.servingtextStyle}>{foodServing}{foodServingUnit} ({foodServingWeight}g)</Text>
                        </View>
                        <View style={styles.calorieContainer}>
                            <Text style={styles.textStyle}>Calories per Serving</Text>
                            <Text style={styles.textStyle}>{foodCalories}</Text>
                        </View>
                        <Text style={styles.regulartextStyle}>Click card for more details</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function ViewSuggestion({foodCategory, }){

    const [visible, setVisible] = useState (false);
    const toggleOverlay = () => {
        setVisible(!visible);
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
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={overlayStyles.overlay}>
            { isLoading ? (<ActivityIndicator />) : (
                    <FlatList 
                    contentContainerStyle={searchStyles.list}
                    data={data}
                    keyExtractor={({ food_name }, tag_id) => food_name}
                    renderItem={({ item }) => (
                    <SearchResult foodName={item.food_name} />
                    )}
                    />
            )}
            </Overlay>
            </TouchableOpacity>   
        </View>  
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: Dimensions.get('window').height * 0.20,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: colors.primary_white,
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.gray_shade_1
    }, 
    textStyle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        paddingLeft: 5,
        color: colors.primary_black,
    },
    regulartextStyle: {
        fontFamily: 'Montserrat',
        fontSize: 15,
        paddingLeft: 5,
        color: colors.primary_black,
    },
    servingtextStyle: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        paddingLeft: 5,
        color: colors.gray_shade_4,
    },
    topPartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomPartContainer: {
        flexDirection: 'row',
    },
    foodCategoryText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 17,
        color: colors.primary_black,
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
        height: Dimensions.get('window').height * 0.125,
        width: Dimensions.get('window').width * 0.3,
        justifyContent: 'center',
        alignContent: 'center',
    },
    foodImage: {
        height: Dimensions.get('window').height * 0.125,
        width: Dimensions.get('window').width * 0.3,
    },

    viewSuggestionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewSuggestionButton: {
        width: Dimensions.get('window').width*0.8,
        height: Dimensions.get('window').height*0.05,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: colors.primary_white,
    },

    buttonText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 19,
        paddingRight: 30,
        color: colors.primary_black,
    },
})