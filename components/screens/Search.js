import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, TextInput, StyleSheet, Dimensions, ActivityIndicator, FlatList } from 'react-native'

import NavigationBar from '../modules/NavigationBar'
import SearchResult from '../modules/searchResult'
import colors from '../../assets/styles/colors'
import { ScrollView } from 'react-native-gesture-handler'

export default function Search( props ){
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState();
    const [error, setError] = useState();
    const [textInput, setTextInput] = useState("");
    const [ list, setList ] = useState([])

    // API Endpoints

    let url = 'https://trackapi.nutritionix.com/v2/search/instant?query=' + textInput ;
    let header = new Headers ();
    header.append('x-app-id', '2e027ee6')
    header.append('x-app-key', '37205a1771d3cf18f8a82df5d923aade')

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

    useEffect(() => {
        for (let food in data) {
            setList(list => [...list, data[food].food_name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())])
        }
    }, [data])

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.mainBody}>
                <TextInput 
                    style={styles.input}
                    placeholder={'Search for a food'}
                    placeholderTextColor={colors.gray_shade_2}
                    onChangeText={text => 
                        setTextInput(text)}
                    onSubmitEditing={
                        textInput == "" ? null : onSearch}
                    />
                <View name='Results' style={styles.SearchArea}>
                    { isLoading == null? (<></>) : (
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerStyle}>Results: {textInput}</Text>
                    </View>
                    )}
                    { isLoading ? (<ActivityIndicator />) : (
                        // <FlatList 
                        //     contentContainerStyle={styles.list}
                        //     data={data}
                        //     keyExtractor={( item ) => {item.tag_id, item.food_name}}
                        //     renderItem={({ item }) => (
                        //         <SearchResult foodName={item.food_name} />
                        //     )}
                        // />
                        <ScrollView contentContainerStyle={styles.list}>
                            {list.map((item, index) => {
                            return (
                                <SearchResult key={index} foodName={item} />
                            )
                        })}
                        </ScrollView>
                        
                    )}
                </View>
                <View name='More Information' style={styles.MoreInformation}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.textStyle}>
                            Looking for information about a food? This page displays information of food such as their nutritional facts and their description.
                        </Text>
                    </View>  
                </View>
            </View>
        <NavigationBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.primary_white,
        alignItems: 'center',
    },

    mainBody: {
        paddingHorizontal: Dimensions.get('window').width * 0.01,
        alignItems: 'center',
    },

    input: { 
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.06,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: colors.gray_shade_2,
        borderWidth: 2,
        borderRadius: 10, 
        fontSize: 16,
        color: colors.primary_black,
        marginTop: 30,
    },

    SearchArea: {
        height: Dimensions.get('window').height * 0.60,
    },

    MoreInformation: {
        height: Dimensions.get('window').height * 0.2,
    },

    infoContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.12,
        marginTop: Dimensions.get('window').height * 0.01,
        paddingLeft: 10,
        paddingTop: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray_shade_2,
    },

    headerContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.08,
        justifyContent: 'center',
        paddingLeft: 20,
    },

    headerStyle: {
        fontWeight: 'bold',
        fontSize: 23,
        color: colors.primary_black,
    },

    textStyle: {
        fontSize: 16,
        color: colors.primary_black,
    },
    list: {
        alignItems: 'center',
    },
});