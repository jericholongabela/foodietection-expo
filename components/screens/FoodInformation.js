import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import NutritionLabel from "../modules/nutritionlabel";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";

import { getFoodNutrients } from "../modules/getFoodNutrients";
import colors from "../../assets/styles/colors";
import daily_value from "../fuzzy/daily_value";

export default function FoodInformation ( food ) {

    let [isLoading, setLoading] = useState(true);
    let [nutrients, setNutrients] = useState(null);
    let [data, setData] = useState();
    let [error, setError] = useState();

    // API Endpoints
    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients?'
    let header = new Headers ();
    header.append('Content-Type', 'application/json')
    header.append('x-app-id', 'dc8f2b01')
    header.append('x-app-key', '7ca38ca16b834b43a0242fd71259adb5')

    let jsonQuery = JSON.stringify({"query": "adobo"});

    let request = new Request (url, {
        method: 'POST',
        headers: header,
        mode: 'cors',
        body: jsonQuery,
    })

    useEffect(() => {
        fetch(request)
            .then((response) => response.json())
            .then((json) => {
                setData((json.foods));
                console.log("I am done fetching!")
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(() => setLoading(false))
        
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    console.log("data", data)
    let x = daily_value(data);
    console.log(x.carbohydrates);
    
    return(
        <SafeAreaView style={styles.screen}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
             >
                <View style={styles.foodInformationContainer}>
                    <View style={styles.foodNameCategoryContainer}>
                        <Text style={styles.foodName}>Adobo</Text>
                        <View style={styles.foodCategoryContainer}>
                            <Text style={styles.foodCategory}>Grow</Text>
                            <TouchableOpacity>
                                <Icon name="help-outline" type="material" size={26} style={styles.helpIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.foodImageDetailsContainer}>
                        <Image style={styles.foodImage} source={require("../../assets/splash.png")} resizeMethod={"contain"} />
                        <View style={styles.foodDetailsContainer}>
                            <Text style={styles.servingSize}>Serving size: 1 cup (241g)</Text>
                            <Text style={styles.caloriesPerServing}>Calories per serving</Text>
                            <Text style={styles.calories}>454</Text>
                        </View>
                    </View>
                </View>
                <NutritionLabel
                servingsPerContainer = {"4"}
                servingSize = {"40g"}
                servingUnit = {"oz"}
                calories = {"300"}
                totalFatAmount = {"10"}
                totalFatPercentage = {"2%"}
                saturatedFatAmount = {"5"}
                saturatedFatPercentage = {"4%"}
                transFatAmount = {"0"}
                cholesterolAmount = {"0"}
                cholesterolPercentage = {"0%"}
                sodiumAmount = {"0"}
                sodiumPercentage = {"0%"}
                totalCarbohydrateAmount = {"10"}
                totalCarbohydratePercentage = {"2%"}
                dietaryFiberAmount = {"5"}
                dietaryFiberPercentage = {"4%"}
                totalSugarsAmount = {"0"}
                totalSugarsPercentage = {"0%"}
                proteinAmount = {"0"}
                vitaminAAmount = {145}
                vitaminAPercentage = {"0%"}
                vitaminCAmount = {"0"}
                vitaminCPercentage = {"0%"}
                calciumAmount = {"0"}
                calciumPercentage = {"0%"}
                ironAmount = {"0"}
                ironPercentage = {"0%"}
                />
                <View style={{height:80}}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: colors.primary_white,
        alignItems: 'center',
    },
    scroll: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    foodInformationContainer: {
        height: Dimensions.get('window').height * 0.275,
        marginBottom: 20,
    },
    foodNameCategoryContainer: {
        height: Dimensions.get('window').height * 0.075,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    foodName: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    foodCategoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    foodCategory: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.red_shade_2,
        marginRight: 10,
    },
    helpIcon: {

    },
    foodImageDetailsContainer: {
        height: Dimensions.get('window').height * 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    foodImage: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.35,
    },
    foodDetailsContainer: {
        height: Dimensions.get('window').height * 0.2,
        justifyContent: 'center',
    },
    servingSize: {
        fontSize: 16,
    },
    caloriesPerServing: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    calories: {
        fontWeight: 'bold',
        fontSize: 50,
    },
});