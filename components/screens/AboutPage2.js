import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function AboutFoodietectionPage2( props ){
    return(
        <View style={styles.screen}>
            <ScrollView style={{marginBottom: Dimensions.get('screen').height * .02}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>What is the purpose of this app?</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>
                        <Text>The purpose of this application is to supplement the relevant food information that the user needs. As we know, information is readily available online but few are actively looking for it.
                            This application was made by the proponents so that it will be easier for the users to get relevant nutritional information of their food just by using their mobile camera.</Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Text>{'\n'}Our aim is to be able to develop an application that can be used by anyone that can easily scan their food using a phone camera and output relevant information about the food that they are consuming. This would help them be aware of the contents of the food they eat and gain ideas on balancing their diet. We will also show articles about the Pinggang Pinoy project and informative information that can furthermore showcase this project. At the same time, it will also be able to classify food categories (If it is Go, Grow, or Glow food) based on the nutritional content that the detected food has. We also aim to be able to recommend food that is tailored to the user by their personal preferences (or just in general, healthy foods) by showing what food category they lack (if they lack either Go, Grow, or Glow foods) and giving foods that are in those categories.</Text>
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