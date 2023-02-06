import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, View, Text, TextInput, ScrollView, Dimensions, FlatList, Image } from 'react-native'

import Header from '../modules/Header'
import mealinfoStyles from '../../assets/styles/mealinformation'
import MealCard, { ViewSuggestion } from '../modules/MealCard';
import daily_value from '../fuzzy/daily_value';
import { Context } from "../global_context/GlobalContext";
import recommendation from '../fuzzy/recommendation';

import {initializeApp} from 'firebase/app';
import {getFirestore, setDoc, collection, doc, getDocs} from 'firebase/firestore';

export default function MealInformation( props, ){
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

    const { 
            onPress, 
            buttonText = 'View Suggestions',
    } = props;

    const [foodData, setFoodData] = useState();
    const [calories, setCalories] = useState(0);
    const [filename, setFilename] = useState();
    let category;
    const [lackfood, setLackFood] = useState();
    const [reminder, setReminder] = useState();
    const [lackfoods, setLackFoods] = useState();
    const [ query, setQuery ] = useState([]);
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState();

    const { predictedResult, setPredictedResult } = useContext(Context);
    const { foodrecommendation, setFoodRecommendation} = useContext(Context);


    let space = ' ', tempquery = '';
    for(let i=0;i<Object.keys(predictedResult).length;i++){
        tempquery = tempquery + space + predictedResult[i].label;
    }


    

    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients?'
    let header = new Headers ();
    header.append('Content-Type', 'application/json')
    header.append('x-app-id', 'b8abbafb')
    header.append('x-app-key', 'ad0ca84860d6a22c96efe16bcf9366d8')

    let jsonQuery = JSON.stringify({"query": "Pork Belly"});

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
                setFoodData((json.foods));
                setFilename('Filename.jpeg');
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(() => setLoading(false))    
    }, []);




    
    let tempCalories=0;
    function totalCalories(item){
        tempCalories+=item.nf_calories;
        tempCalories=Math.round(tempCalories);
        return setCalories(tempCalories);
    };
    let counter = 0, joint = ' and ', tempcateg ='', lack, lackfoodss;
    const tempgroup = [];





    function fuzzyDaily(item){

        let x = daily_value(item);
        category = x.category;
        if(counter > 0){
            let x = 0;
            for(let i=0;i<counter;i++){
                if(tempgroup[i] == category)
                    x = 1;
            }
            if(x == 0){
                tempgroup[counter] = category;
                if(tempgroup[counter] != "Cannot Determine"){
                    tempcateg = tempcateg + joint + tempgroup[counter];
                }
            }
        }
        else{
            tempgroup[counter] = category;
            tempcateg = category;
        }
    
        /*console.log('Temp grouppppppppppppp',tempgroup);
        if(counter > 0){
            if(tempcateg == x.category)
                tempcateg = tempcateg;
            else{
                if(x.category != "Cannot Determine")
                tempcateg = tempcateg + joint + x.category;
            }
        }
        else
        tempcateg = x.category;
        */

        lack = recommendation(tempcateg);
        setFoodRecommendation(lack.lackgroup);
        setReminder(lack.reminder);
        lackfoodss = lack.foods;
        counter = counter+1;
        

        const docRef = setDoc(doc(db, "users", item.food_name), {
            foodgroup:x.category
        })
    
    };
    return (
        <SafeAreaView style={mealinfoStyles.screen}>
            <Header textProps={"Meal Information"} />
            <ScrollView nestedScrollEnabled={true} style={mealinfoStyles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={mealinfoStyles.mealThumbContainer}>
                    <View style={mealinfoStyles.mealThumbSecondContainer}>
                        <Image source={"../assets/images/DOST_FNRI_logo.png"} style={mealinfoStyles.thumbnailImage} resizeMode={'contain'}/> 
                    </View>
                    <Text style={mealinfoStyles.mealThumbText}>{filename}</Text>
                </View>
                <View name='Your Meal Contains'>
                    <View style={mealinfoStyles.headerContainer}>
                        <Text style={mealinfoStyles.headerStyle}>Your meal contains:</Text>
                    </View>
                </View>
                <FlatList
                data={foodData}
                keyExtractor={(item) => {item.food_name, item.food_category, item.serving_qty, item.serving_unit, item.serving_weight_grams, item.nf_calories, item.photo.thumb}}
                renderItem={({ item }) => (
                    totalCalories(item),
                    fuzzyDaily(item),
                    <MealCard 
                    foodName={item.food_name} 
                    foodCategory={category}
                    foodServing={item.serving_qty}
                    foodServingUnit={item.serving_unit}
                    foodServingWeight={item.serving_weight_grams}
                    foodCalories={item.nf_calories}
                    foodImage={item.photo.thumb}
                    />
                )}
                />
                {/* <MealCard 
                        foodName={'Rice'}
                        foodCategory={'Go'}
                        foodServing={'1cup (158g)'}
                        foodCalories={'205'}
                        foodImage={require("../../assets/images/DOST_FNRI_logo.png")}
                /> 
                <MealCard 
                        foodName={'Adobo'}
                        foodCategory={'Grow'}
                        foodServing={'241g'}
                        foodCalories={'454'}
                        foodImage={require("../../assets/images/DOST_FNRI_logo.png")}
                /> */}
                <View name='Summary' style={mealinfoStyles.summaryContainer}>
                    <View style={mealinfoStyles.summaryBorder}>
                        <Text style={mealinfoStyles.headerStyle}>
                            Summary:
                        </Text>
                    </View> 
                    {/* meal info goes here. */}
                    <View style={mealinfoStyles.totalCaloriesContainer}>
                        <Text style={mealinfoStyles.boldtextStyle}>
                            Total Calories:     
                        </Text>
                        <Text style={mealinfoStyles.boldtextStyle}>
                            {calories}  {/* Fetches the value of calories */}    
                        </Text>
                    </View>
                    <View style={mealinfoStyles.remainingCaloriesContainer}>
                        <View style={mealinfoStyles.remainingCaloriesTextContainer}>
                            <Text style={mealinfoStyles.boldtextStyle}>
                                Remaining suggested calories to be intaked for today:
                            </Text>
                        </View>
                        <View style={mealinfoStyles.textContainer}>
                            <Text style={mealinfoStyles.boldtextStyle}>
                                {2000-calories}  {/* Fetches the value of remaining calories */}
                            </Text>
                        </View>
                    </View> 
                    <View style={mealinfoStyles.headerContainer}>
                        <Text style={mealinfoStyles.boldtextStyle}>
                        Your meal lacks a 
                        <Text style={mealinfoStyles.glowinnerText}> {foodrecommendation}</Text>
                        <Text style={mealinfoStyles.boldtextStyle}> food</Text>
                        </Text>
                        <Text style={mealinfoStyles.ReminderboldtextStyle}>Reminder:</Text>
                        <Text style={mealinfoStyles.boldtextStyle}>
                        {reminder}
                        </Text>
                        <ViewSuggestion/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}