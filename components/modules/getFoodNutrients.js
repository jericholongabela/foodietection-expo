import { useState, useEffect } from 'react';

const getFoodNutrients = ( food ) => {

    let [data, setData] = useState([]);
    let [error, setError] = useState();
    let [nutrients, setNutrients] = useState(null);

    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients?'
    let header = new Headers ();
    header.append('Content-Type', 'application/json')
    header.append('x-app-id', '2e027ee6')
    header.append('x-app-key', '37205a1771d3cf18f8a82df5d923aade')

    let jsonQuery = JSON.stringify({'query': food});
    
    let options = {
        method: 'POST',
        headers: header,
        mode: 'cors',
        body: jsonQuery,
    }

    let request = new Request (url, options)

    useEffect(() => {
        fetch(request)
            .then((response) => response.json())
            .then((json) => {
                    setData(json.foods);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(() => setLoading(false))    
    }, []);

    // making sure nutrients is empty
    setNutrients(null);

    console.log("Data is:" + data);
    console.log("Error is:" + error);

    let servingsPerContainer;
    let servingSize;
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

    servingsPerContainer = getZeroAmount(data.serving_qty);
    servingSize = getZeroAmount(data.serving_unit);
    servingWeight = getZeroAmount(data.serving_weight_grams);
    calories = getZeroAmount(data.nf_calories);
    totalFatAmount = getZeroAmount(data.nf_total_fat);
    totalFatPercentage = getZeroAmount(getFatKCAL(totalFatAmount, 30));
    saturatedFatAmount = getZeroAmount(data.nf_saturated_fat);
    transFatAmount = getZeroAmount(data.nf_total_fat - data.nf_saturated_fat);
    cholesterolAmount = getZeroAmount(data.nf_cholesterol);
    cholesterolPercentage = getZeroAmount(getNutrientPercentage(cholesterolAmount, 300));
    sodiumAmount = getZeroAmount(data.nf_sodium);
    sodiumPercentage = getZeroAmount(getNutrientPercentage(sodiumAmount, 500));
    totalCarbohydrateAmount = getZeroAmount(data.nf_total_carbohydrate);
    totalCarbohydratePercentage = getZeroAmount(getCarbohydrateKCAL(totalCarbohydrateAmount, 300));
    dietaryFiberAmount = getZeroAmount(data.nf_dietary_fiber);
    dietaryFiberPercentage = getZeroAmount(getNutrientPercentage(dietaryFiberAmount, 25));
    totalSugarsAmount = getZeroAmount(data.nf_sugars);
    totalSugarsPercentage = getZeroAmount(getNutrientPercentage(totalSugarsAmount, 253));
    proteinAmount = getZeroAmount(data.nf_protein);
    vitaminAAmount = getZeroAmount(getExactNutrient(320, data));
    vitaminAPercentage = getZeroAmount(getNutrientPercentage(vitaminAAmount, 700));
    vitaminCAmount = getZeroAmount(getExactNutrient(401, data));
    vitaminCPercentage = getZeroAmount(getNutrientPercentage(vitaminCAmount, 70));
    calciumAmount = getZeroAmount(getExactNutrient(301, data));
    calciumPercentage = getZeroAmount(getNutrientPercentage(calciumAmount, 750));
    ironAmount = getZeroAmount(getExactNutrient(303, data));
    ironPercentage = getZeroAmount(getNutrientPercentage(ironAmount, 12));

    setNutrients({
        servingsPerContainer: servingsPerContainer,
        servingSize: servingSize,
        servingWeight: servingWeight,
        calories: calories,
        totalFatAmount: totalFatAmount,
        totalFatPercentage: totalFatPercentage,
        saturatedFatAmount: saturatedFatAmount,
        transFatAmount: transFatAmount,
        cholesterolAmount: cholesterolAmount,
        cholesterolPercentage: cholesterolPercentage,
        sodiumAmount: sodiumAmount,
        sodiumPercentage: sodiumPercentage,
        totalCarbohydrateAmount: totalCarbohydrateAmount,
        totalCarbohydratePercentage: totalCarbohydratePercentage,
        dietaryFiberAmount: dietaryFiberAmount,
        dietaryFiberPercentage: dietaryFiberPercentage,
        totalSugarsAmount: totalSugarsAmount,
        totalSugarsPercentage: totalSugarsPercentage,
        proteinAmount: proteinAmount,
        vitaminAAmount: vitaminAAmount,
        vitaminAPercentage: vitaminAPercentage,
        vitaminCAmount: vitaminCAmount,
        vitaminCPercentage: vitaminCPercentage,
        calciumAmount: calciumAmount,
        calciumPercentage: calciumPercentage,
        ironAmount: ironAmount,
        ironPercentage: ironPercentage
    })

    console.log("Nutrients are:" + nutrients);
    return nutrients;
};

function getExactNutrient ( id, data ) {
    if (data != null) {
        console.log("Data is", data);
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
    if (value == null) {
        return 0;
    }
    else {
        return value;
    }
}

export { getFoodNutrients };