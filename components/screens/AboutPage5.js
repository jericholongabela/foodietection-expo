import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function AboutFoodietectionPage5( props ){
    return(
        <View style={styles.screen}>
            <ScrollView style={{marginBottom: Dimensions.get('screen').height * .02}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>What is the Go, Grow, Glow?</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>
                        The Go, Grow, Glow foods or the Pinggang Pinoy is originally a concept made for easy understanding of healthy food intake for children. Although based from various studies and statistics, many adult Filipinos are having a difficult time in trying to eat a complete nutritious meal. That is why the researchers intended to try to disseminate the Pinggang Pinoy to other age groups to help them understand how to eat a complete meal with ease. But what is the Pinggang Pinoy? What are Go, Grow, and Glow foods? Let us discuss all of these in the following paragraphs.</Text>
                    <Text style={styles.bodyText}>
                        <Image source={require('../../assets/images/pinggangpinoyplatingchallenge.png')} style={{width: Dimensions.get('screen').width* .9, height: Dimensions.get('screen').height*.5, resizeMode: 'contain', alignSelf: 'center', marginVertical: 10,}}/>
                        <Text>{'\n'}The </Text>
                        <Text style={{fontWeight: 'bold', color: colors.primary_blue}}>Pinggang Pinoy</Text>
                        <Text> is a new and easy-to-understand food guide that uses a familiar food plate model to convey the right food group proportions on a per-meal basis to meet the body's energy and nutrient needs of adults. Pinggang Pinoy serves as visual tool to help Filipinos adopt healthy eating habits at meal times by delivering effective dietary and healthy lifestyle messages.{'\n'}
                        </Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Image source={require('../../assets/images/Go.png')} style={{width: Dimensions.get('screen').width* .9, height: Dimensions.get('screen').height*.3, resizeMode: 'contain', alignSelf: 'center', marginVertical: 10,}}/>
                        <Text style={{fontWeight: 'bold', color: colors.yellow_shade_1}}>{'\n'}Go foods</Text>
                        <Text> are the type of food that provide fuel and help us ‘go’ and be active. Examples of ‘Go’ foods include bread, rice, pasta, cereals and potato. These foods give our muscles fuel to run, swim, jump, cycle and our brain fuel to concentrate. If we don’t eat enough ‘Go’ foods then we can feel tired and won’t have enough fuel to get through the day. It’s important to include ‘Go’ foods at all meals and especially breakfast so that our body and brain can get ready for the busy school day ahead.{'\n'}</Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Image source={require('../../assets/images/Grow.jpg')} style={{width: Dimensions.get('screen').width* .9, height: Dimensions.get('screen').height*.3, resizeMode: 'contain', alignSelf: 'center', marginVertical: 10,}}/>
                        <Text style={{fontWeight: 'bold', color: colors.red_shade_2}}>{'\n'}Grow foods</Text>
                        <Text> are the type of food that provide fuel and help us ‘go’ and be active. Examples of ‘Go’ foods include bread, rice, pasta, cereals and potato. These foods give our muscles fuel to run, swim, jump, cycle and our brain fuel to concentrate. If we don’t eat enough ‘Go’ foods then we can feel tired and won’t have enough fuel to get through the day. It’s important to include ‘Go’ foods at all meals and especially breakfast so that our body and brain can get ready for the busy school day ahead.</Text>
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