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


    servingsPerContainer = getZeroAmount(data[0].serving_qty);

    servingUnit = data[0].serving_unit;
    console.log("Next is: servingWeight");
    servingWeight = Math.round(getZeroAmount(data[0].serving_weight_grams));
    console.log("Next is: calories");
    calories = Math.round(getZeroAmount(data[0].nf_calories));

    totalFatAmount = Math.round(getZeroAmount(data[0].nf_total_fat));

    // I might be wrong in this
    totalFatPercentage = Math.round(getZeroAmount(getFatKCAL(totalFatAmount, 759)));

    saturatedFatAmount = Math.round(getZeroAmount(data[0].nf_saturated_fat));
    
    transFatAmount = Math.round(getZeroAmount(data[0].nf_total_fat - data[0].nf_saturated_fat));
    
    cholesterolAmount = Math.round(getZeroAmount(data[0].nf_cholesterol));
    
    cholesterolPercentage = Math.round(getZeroAmount(getNutrientPercentage(cholesterolAmount, 300)));
    
    sodiumAmount = Math.round(getZeroAmount(data[0].nf_sodium));
    
    sodiumPercentage =Math.round(getZeroAmount(getNutrientPercentage(sodiumAmount, 500)));

    totalCarbohydrateAmount = Math.round(getZeroAmount(data[0].nf_total_carbohydrate));
    
    totalCarbohydratePercentage = Math.round(getZeroAmount(getCarbohydrateKCAL(totalCarbohydrateAmount, 1897.5)));
    
    dietaryFiberAmount = Math.round(getZeroAmount(data[0].nf_dietary_fiber)*10)/10;
    
    dietaryFiberPercentage = Math.round(getZeroAmount(getNutrientPercentage(dietaryFiberAmount, 25)));

    totalSugarsAmount = Math.round(getZeroAmount(data[0].nf_sugars) * 10)/10;

    totalSugarsPercentage = getZeroAmount(getNutrientPercentage(totalSugarsAmount, 253));
    
    proteinAmount = Math.round(getZeroAmount(data[0].nf_protein));

    vitaminAAmount = Math.round(getZeroAmount(getExactNutrient(320, data)));

    vitaminAPercentage = Math.round(getZeroAmount(getNutrientPercentage(vitaminAAmount, 700)));
 
    vitaminCAmount = Math.round(getZeroAmount(getExactNutrient(401, data)));
 
    vitaminCPercentage = Math.round(getZeroAmount(getNutrientPercentage(vitaminCAmount, 70)));

    calciumAmount = Math.round(getZeroAmount(getExactNutrient(301, data)));
    
    calciumPercentage = Math.round(getZeroAmount(getNutrientPercentage(calciumAmount, 750)));
   
    ironAmount = Math.round(getZeroAmount(getExactNutrient(303, data))* 100)/100;
  
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
    
    if (value == null | value == NaN) {
        return 0;
    }
    else {
        return value;
    }
}

export {getFoodNutrients} ;