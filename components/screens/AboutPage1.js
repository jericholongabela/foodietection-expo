import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function AboutFoodietectionPage1( props ){
    return(
        <View style={styles.screen}>
            <ScrollView style={{marginBottom: Dimensions.get('screen').height * .02}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>What is this app?</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>
                        <Text>This application is called </Text>
                        <Text style={{fontWeight: 'bold', color: colors.green_shade_4}}>Foodietection. </Text>
                        <Text>This application is made in partial fulfillment of the requirement for the degree - </Text>
                        <Text style={{fontStyle: 'italic'}}>Bachelor of Science in Computer Science. </Text>
                        <Text>This application is made to supplement the dissemination of Food nutrition information to the users.</Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Text>{'\n'}Our system utilizes a trained machine learning algorithm (</Text>
                        <Text style={{fontWeight: 'bold'}}>MobileNetV3</Text>
                        <Text>) tailored for use in limited devices such as mobile devices</Text>
                        <Text>This ML Algorithm will determine the type of food the user captures (e.g., if it is Rice, or some other food). After successfully scanning food, </Text>
                        <Text style={{fontWeight: 'bold'}}>Fuzzy Logic </Text>
                        <Text>algorithm will be used to determine the food category (</Text>
                        <Text style={{color: colors.yellow_shade_2, fontWeight: 'bold'}}>Go</Text>
                        <Text>, </Text>
                        <Text style={{color: colors.red_shade_2, fontWeight: 'bold'}}>Grow</Text>
                        <Text>, or </Text>
                        <Text style={{color: colors.green_shade_3, fontWeight: 'bold'}}>Glow</Text>
                        <Text>) the food falls into based on the food's nutritional contents that will be fetch from the Nutritionix API. After displaying useful information for the user, the same algorithm will also determine if the food the user currently taking is complete (if it has Go, Grow, and Glow foods in it). If not, the algorithm will suggest a food that can or will complement and complete wherever food category the user is lacking.</Text>
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