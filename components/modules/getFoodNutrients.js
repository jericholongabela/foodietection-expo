import React, { useState, useEffect } from 'react';

function getFoodNutrients ( data ) {

    //console.log("I am in getFoodNutrients: ", data);

    let servingsPerContainer;
    let servingUnit;
    let servingWeight;
    let calories;
    let totalFatAmount;
    let totalFatPercentage;
    let saturatedFatAmount ;
    let transFatAmount;
    let cholesterolAmount;
    let cholesterolPercentage;
    let sodiumAmount;
    let sodiumPercentage;
    let totalCarbohydrateAmount;
    let totalCarbohydratePercentage;
    let dietaryFiberAmount;
    let dietaryFiberPercentage;
    let totalSugarsAmount;
    let totalSugarsPercentage;
    let proteinAmount;
    let vitaminAAmount;
    let vitaminAPercentage;
    let vitaminCAmount;
    let vitaminCPercentage;
    let calciumAmount;
    let calciumPercentage;
    let ironAmount;
    let ironPercentage;

    // dont forget to round this!
    // use Math.round() to round to nearest whole number

    console.log("Next is: servingsPerContainer");
    servingsPerContainer = getZeroAmount(data[0].serving_qty);
    console.log("Next is: servingUnit");
    servingUnit = data[0].serving_unit;
    console.log("Next is: servingWeight");
    servingWeight = Math.round(getZeroAmount(data[0].serving_weight_grams));
    console.log("Next is: calories");
    calories = Math.round(getZeroAmount(data[0].nf_calories));
    console.log("Next is: totalFatAmount");
    totalFatAmount = Math.round(getZeroAmount(data[0].nf_total_fat));
    console.log("Next is: totalFatPercentage");
    // I might be wrong in this
    totalFatPercentage = Math.round(getZeroAmount(getFatKCAL(totalFatAmount, 759)));
    console.log("Next is: saturatedFatAmount");
    saturatedFatAmount = Math.round(getZeroAmount(data[0].nf_saturated_fat));
    console.log("Next is: transFatAmount");
    transFatAmount = Math.round(getZeroAmount(data[0].nf_total_fat - data[0].nf_saturated_fat));
    console.log("Next is: cholesterolAmount");
    cholesterolAmount = Math.round(getZeroAmount(data[0].nf_cholesterol));
    console.log("Next is: cholesterolPercentage");
    cholesterolPercentage = Math.round(getZeroAmount(getNutrientPercentage(cholesterolAmount, 300)));
    console.log("Next is: sodiumAmount");
    sodiumAmount = Math.round(getZeroAmount(data[0].nf_sodium));
    console.log("Next is: sodiumPercentage");
    sodiumPercentage =Math.round(getZeroAmount(getNutrientPercentage(sodiumAmount, 500)));
    console.log("Next is: totalCarbohydrateAmount");
    totalCarbohydrateAmount = Math.round(getZeroAmount(data[0].nf_total_carbohydrate));
    console.log("Next is: totalCarbohydratePercentage");
    totalCarbohydratePercentage = Math.round(getZeroAmount(getCarbohydrateKCAL(totalCarbohydrateAmount, 1897.5)));
    console.log("Next is: dietaryFiberAmount");
    dietaryFiberAmount = Math.round(getZeroAmount(data[0].nf_dietary_fiber)*10)/10;
    console.log("Next is: dietaryFiberPercentage");
    dietaryFiberPercentage = Math.round(getZeroAmount(getNutrientPercentage(dietaryFiberAmount, 25)));
    console.log("Next is: totalSugarsAmount");
    totalSugarsAmount = Math.round(getZeroAmount(data[0].nf_sugars) * 10)/10;
    console.log("Next is: totalSugarsPercentage");
    totalSugarsPercentage = getZeroAmount(getNutrientPercentage(totalSugarsAmount, 253));
    console.log("Next is: proteinAmount");
    proteinAmount = Math.round(getZeroAmount(data[0].nf_protein));
    console.log("Next is: vitaminAAmount");
    vitaminAAmount = Math.round(getZeroAmount(getExactNutrient(320, data)));
    console.log("Next is: vitaminAPercentage");
    vitaminAPercentage = Math.round(getZeroAmount(getNutrientPercentage(vitaminAAmount, 700)));
    console.log("Next is: vitaminCAmount");
    vitaminCAmount = Math.round(getZeroAmount(getExactNutrient(401, data)));
    console.log("Next is: vitaminCPercentage");
    vitaminCPercentage = Math.round(getZeroAmount(getNutrientPercentage(vitaminCAmount, 70)));
    console.log("Next is: calciumAmount");
    calciumAmount = Math.round(getZeroAmount(getExactNutrient(301, data)));
    console.log("Next is: calciumPercentage");
    calciumPercentage = Math.round(getZeroAmount(getNutrientPercentage(calciumAmount, 750)));
    console.log("Next is: ironAmount");
    ironAmount = Math.round(getZeroAmount(getExactNutrient(303, data))* 100)/100;
    console.log("Next is: ironPercentage");
    ironPercentage = Math.round(getZeroAmount(getNutrientPercentage(ironAmount, 12)));
    
    return { 
        servingsPerContainer,
        servingUnit,
        servingWeight,
        calories,
        totalFatAmount,
        totalFatPercentage,
        saturatedFatAmount,
        transFatAmount,
        cholesterolAmount,
        cholesterolPercentage,
        sodiumAmount,
        sodiumPercentage,
        totalCarbohydrateAmount,
        totalCarbohydratePercentage,
        dietaryFiberAmount,
        dietaryFiberPercentage,
        totalSugarsAmount,
        totalSugarsPercentage,
        proteinAmount,
        vitaminAAmount,
        vitaminAPercentage,
        vitaminCAmount,
        vitaminCPercentage,
        calciumAmount,
        calciumPercentage,
        ironAmount,
        ironPercentage,
     };
};

function getExactNutrient ( id, data ) {
    if (data != null) {
        //console.log("Data is", data);
        let i = 0;
        while (data[0].full_nutrients[i].attr_id != id) {
            i++;
        }
        return data[0].full_nutrients[i].value;
    }
    else {
        console.log("Data is null");
    }
}

function getNutrientPercentage ( value, suggested ){
    return (value/suggested)*100;
}

function getFatKCAL ( value, suggested ){
    value = value * 9;
    return (value/suggested)*100;
}

function getCarbohydrateKCAL ( value, suggested ){
    value = value * 4;
    return (value/suggested)*100;
}

function getZeroAmount ( value ){
    console.log("Value is", value)
    if (value == null | value == NaN) {
        return 0;
    }
    else {
        return value;
    }
}

export {getFoodNutrients} ;