import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import NutritionLabel from "../modules/nutritionlabel";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";

import {getFoodNutrients} from "../modules/getFoodNutrients";
import colors from "../../assets/styles/colors";
import daily_value from "../fuzzy/daily_value";

import {initializeApp} from 'firebase/app';
import {getFirestore, setDoc, collection, doc, getDocs} from 'firebase/firestore';
import HelpOverlay from "../modules/help";
import { Context } from "../global_context/GlobalContext";

export default function FoodInformation ( food ) {

    const { help, setHelpToggle } = useContext(Context);

    const firebaseConfig = {
        apiKey: "AIzaSyBdARsXA0l_w4DJPBLqrf9lVlOzd1keZz8",
        authDomain: "foodietection.firebaseapp.com",
        projectId: "foodietection",
        storageBucket: "foodietection.appspot.com",
        messagingSenderId: "247969464172",
        appId: "1:247969464172:web:a8ce541df666d4e6e1fd49",
        measurementId: "G-LDF9L2BM70"
      };
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);


    let [isLoading, setLoading] = useState(true);
    const [nutrients, setNutrients] = useState(null);
    let [data, setData] = useState();
    let [error, setError] = useState();

    let [calciumAmount, setcalciumAmount] = useState();
    let [calciumPercentage, setcalciumPercentage] = useState();
    let [calories, setcalories] = useState();
    let [cholesterolAmount, setcholesterolAmount] = useState();
    let [cholesterolPercentage, setcholesterolPercentage] = useState();
    let [dietaryFiberAmount, setdietaryFiberAmount] = useState();
    let [dietaryFiberPercentage, setdietaryFiberPercentage] = useState();
    let [ironAmount, setironAmount] = useState();
    let [ironPercentage, setironPercentage] = useState();
    let [proteinAmount, setproteinAmount] = useState();
    let [saturatedFatAmount, setsaturatedFatAmount] = useState();
    let [servingUnit, setservingUnit] = useState();
    let [servingWeight, setservingWeight] = useState();
    let [servingsPerContainer, setservingsPerContainer] = useState();
    let [sodiumAmount, setsodiumAmount] = useState();
    let [sodiumPercentage, setsodiumPercentage] = useState();
    let [totalCarbohydrateAmount, settotalCarbohydrateAmount] = useState();
    let [totalCarbohydratePercentage, settotalCarbohydratePercentage] = useState();
    let [totalFatAmount, settotalFatAmount] = useState();
    let [totalFatPercentage, settotalFatPercentage] = useState();
    let [totalSugarsAmount, settotalSugarsAmount] = useState();
    let [totalSugarsPercentage, settotalSugarsPercentage] = useState();
    let [transFatAmount, settransFatAmount] = useState();
    let [vitaminAAmount, setvitaminAAmount] = useState();
    let [vitaminAPercentage, setvitaminAPercentage] = useState();
    let [vitaminCAmount, setvitaminCAmount] = useState();
    let [vitaminCPercentage, setvitaminCPercentage] = useState();
    let [foodgroup, setFoodgroup]  = useState();
    let [image, setImage] = useState();



    // API Endpoints
    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients?'
    let header = new Headers ();
    header.append('Content-Type', 'application/json')
    header.append('x-app-id', '2e027ee6')
    header.append('x-app-key', '37205a1771d3cf18f8a82df5d923aade')

    let jsonQuery = JSON.stringify({"query": food.route.params.data});

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
                settingNutrients(json.foods)
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(() => setLoading(false))
        
    }, []);


    function settingNutrients (foodInfo) {
        let x = getFoodNutrients(foodInfo);
        setcalciumAmount(x.calciumAmount);
        setcalciumPercentage(x.calciumPercentage);

        setcalories(x.calories);
        setcholesterolAmount(x.cholesterolAmount)
        setcholesterolPercentage(x.cholesterolPercentage);
        setdietaryFiberAmount(x.dietaryFiberAmount);
        setdietaryFiberPercentage(x.dietaryFiberPercentage);
        setironAmount(x.ironAmount);
        setironPercentage(x.ironPercentage);
        setproteinAmount(x.proteinAmount);
        setsaturatedFatAmount(x.saturatedFatAmount);
        setservingUnit(x.servingUnit);
        setservingWeight(x.servingWeight);
        setservingsPerContainer(x.servingsPerContainer);
        setsodiumAmount(x.sodiumAmount);
        setsodiumPercentage(x.sodiumPercentage);
        settotalCarbohydrateAmount(x.totalCarbohydrateAmount);
        settotalCarbohydratePercentage(x.totalCarbohydratePercentage);
        settotalFatAmount(x.totalFatAmount);
        settotalFatPercentage(x.totalFatPercentage);
        settotalSugarsAmount(x.totalSugarsAmount);
        settotalSugarsPercentage(x.totalSugarsPercentage);
        settransFatAmount(x.transFatAmount);
        setvitaminAAmount(x.vitaminAAmount);
        setvitaminAPercentage(x.vitaminAPercentage);
        setvitaminCAmount(x.vitaminCAmount);
        setvitaminCPercentage(x.vitaminCPercentage);
        
        setNutrients(x);
        let y = daily_value(foodInfo[0]);
        setFoodgroup(y.category);
        const docRef = setDoc(doc(db, "users", food.route.params.data), {
            foodgroup:y.category
        })
      
        console.log("foodinfo.photo.thumb", foodInfo[0].photo.thumb)
        setImage(foodInfo[0].photo.thumb)
    }

    // console.log("data.photo", data[0].photo.thumb)
    return(
        <SafeAreaView style={styles.screen}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
             >
                <View style={styles.foodInformationContainer}>
                    <View style={styles.foodNameCategoryContainer}>
                        <Text style={styles.foodName}>{food.route.params.data}</Text>
                        <View style={styles.foodCategoryContainer}>
                            {foodgroup === "GO" ? <Text style={styles.foodCategoryGo}>{foodgroup}</Text> : null}
                            {foodgroup === "GROW" ? <Text style={styles.foodCategoryGrow}>{foodgroup}</Text> : null}
                            {foodgroup === "GLOW" ? <Text style={styles.foodCategoryGlow}>{foodgroup}</Text> : null}
                            <TouchableOpacity onPress={() => setHelpToggle(!help) }>
                                <Icon name="help-outline" type="material" size={26} style={styles.helpIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.foodImageDetailsContainer}>
                        {image ? <Image style={styles.foodImage} source={{ uri : image}} resizeMode={'contain'} />
                        : null}
                        <View style={styles.foodDetailsContainer}>
                            <Text style={styles.servingSize}>{servingsPerContainer} {servingUnit} ({servingWeight}g)</Text>
                            <Text style={styles.caloriesPerServing}>Calories per serving</Text>
                            <Text style={styles.calories}>{calories}</Text>
                        </View>
                    </View>
                </View>
                {nutrients?
                <NutritionLabel
                servingsPerContainer = {servingsPerContainer}
                servingUnit = {servingUnit}
                servingWeight = {servingWeight}
                calories = {calories}
                totalFatAmount = {totalFatAmount}
                totalFatPercentage = {totalFatPercentage}
                saturatedFatAmount = {saturatedFatAmount}
                saturatedFatPercentage = {""}
                transFatAmount = {transFatAmount}
                cholesterolAmount = {cholesterolAmount}
                cholesterolPercentage = {cholesterolPercentage}
                sodiumAmount = {sodiumAmount}
                sodiumPercentage = {sodiumPercentage}
                totalCarbohydrateAmount = {totalCarbohydrateAmount}
                totalCarbohydratePercentage = {totalCarbohydratePercentage}
                dietaryFiberAmount = {dietaryFiberAmount}
                dietaryFiberPercentage = {dietaryFiberPercentage}
                totalSugarsAmount = {totalSugarsAmount}
                totalSugarsPercentage = {""}
                proteinAmount = {proteinAmount}
                vitaminAAmount = {vitaminAAmount}
                vitaminAPercentage = {vitaminAPercentage}
                vitaminCAmount = {vitaminCAmount}
                vitaminCPercentage = {vitaminCPercentage}
                calciumAmount = {calciumAmount}
                calciumPercentage = {calciumPercentage}
                ironAmount = {ironAmount}
                ironPercentage = {ironPercentage}
                /> : null}
                {help? <HelpOverlay foodGroup={foodgroup} / > : null}
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
    foodCategoryGo: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.yellow_shade_3,
        marginRight: 10,
    },
    foodCategoryGrow: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.red_shade_2,
        marginRight: 10,
    },
    foodCategoryGlow: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.green_shade_3,
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