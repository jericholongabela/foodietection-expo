import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function AboutFoodietectionPage7( props ){
    return(
        <View style={styles.screen}>
            <ScrollView style={{marginBottom: Dimensions.get('screen').height * .02}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>How can Nutritional Facts help me in my diet?</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>
                        <Text>Understanding the Nutrition Facts label on food items can help you make healthier choices. The label breaks down the amount of calories, carbs, fat, fiber, protein, and vitamins per serving of the food, making it easier to compare the nutrition of similar products. Be sure to look at different brands of the same foods—nutrition information can differ a lot. For example, one brand of tomato sauce may have more calories and sugar than another brand for the same serving size.</Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Text>{'\n'}In general, eat more foods that are higher in vitamins, minerals (such as calcium and iron), and fiber. Eat fewer foods that are higher in added sugars, saturated fat, and sodium (salt), and avoid trans fat. Keep in mind that the % Daily Value of each nutrient, such as total fat of 10% in the example below, is based on eating 2,000 calories a day. You may eat fewer or more calories a day depending on your age, gender, activity level, current weight, and whether you’re trying to lose or maintain your weight.</Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Image source={require('../../assets/images/food-label.png')} style={{width: Dimensions.get('screen').width * 0.9, height: Dimensions.get('screen').height * 0.4, resizeMode: 'contain', alignSelf: 'center'}}/>
                        <Text>{'\n'}1. Check the </Text>
                        <Text style={{fontWeight: 'bold'}}>Serving size </Text>
                        <Text>first. All the numbers on this label are for a 2/3-cup serving.</Text>
                        <Text>{'\n'}2. </Text>
                        <Text style={{fontWeight: 'bold'}}>This package has 8 servings</Text>
                        <Text>. If you eat the whole thing, you are eating 8 times the amount of calories, carbs, fat, etc., shown on the label.</Text>
                        <Text>{'\n'}3. </Text>
                        <Text style={{fontWeight: 'bold'}}>Total Carbohydrate </Text>
                        <Text>shows you types of carbs in the food, including sugar and fiber.</Text>
                        <Text>{'\n'}4. Choose foods with </Text>
                        <Text style={{fontWeight: 'bold'}}>more fiber, vitamins, and minerals.</Text>
                        <Text>{'\n'}5. Choose foods with </Text>
                        <Text style={{fontWeight: 'bold'}}>lower calories, saturated fat, sodium, and added sugars</Text>
                        <Text>. Avoid </Text>
                        <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>trans fat</Text>.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary_white,
    },
    header: {
        marginTop: Dimensions.get('screen').height * 0.02,
        marginBottom: Dimensions.get('screen').height * 0.025,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
        marginHorizontal: Dimensions.get('screen').width * 0.03,
    },
    bodyContainer: {
        paddingHorizontal:Dimensions.get('screen').width * 0.05,
    },
    bodyText: {
        fontSize: 20,
    },
});