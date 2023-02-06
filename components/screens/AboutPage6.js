import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function AboutFoodietectionPage6( props ){
    return(
        <View style={styles.screen}>
            <ScrollView style={{marginBottom: Dimensions.get('screen').height * .02}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>What are Nutritional Facts?</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>
                        <Text>The Nutritional Facts portions are found at the back of food labels. It provides consumers easy-to-use nutrition information guide as follows:</Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Text>{'\n'}- The serving size in both household and metric measures, which shows the amount of product the people actually eat.</Text>
                        <Text>{'\n'}- The amount of calories from the product is also shown.</Text>
                        <Text>{'\n'}- The amounts of nutrients and their % Daily Values (% DV) important to the health of today's consumers are also listed. The % DV shows how food fits into overall daily needs. For instance, if the percent daily value of food for fat is 25%, the remaining 75% can be obtained from other foods eaten throughout the day. These are reference amounts set by the government for daily intakes.</Text>
                        <Text>{'\n'}- The label also tells the number of calories per gram of fat, carbohydrates, and protein.</Text>
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