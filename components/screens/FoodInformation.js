import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Dimensions } from "react-native";
import NutritionLabel from "../modules/nutritionlabel";

export default function FoodInformation (food) {

    let [foodName, setFoodName] = useState();
    let [isLoading, setLoading] = useState(true);
    
    return(
        <SafeAreaView style={{alignItems: 'center'}}>
            
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
            vitaminAAmount = {"0%"}
            vitaminAPercentage = {"0%"}
            vitaminCAmount = {"0"}
            vitaminCPercentage = {"0%"}
            calciumAmount = {"0"}
            calciumPercentage = {"0%"}
            ironAmount = {"0"}
            ironPercentage = {"0%"}
             />
        </SafeAreaView>
    )
}