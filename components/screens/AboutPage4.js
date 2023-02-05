import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function AboutFoodietectionPage4( props ){
    return(
        <View style={styles.screen}>
            <ScrollView style={{marginBottom: Dimensions.get('screen').height * .02}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Who is the FNRI?</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>
                        <Text>The </Text>
                        <Text style={{fontWeight: 'bold'}}>Food and Nutrition Research Institute (FNRI)</Text>
                        <Text>, the principal research arm of the government in food and nutrition, is one of the research and development institute of the </Text>
                        <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Department of Science and Technology (DOST)</Text>
                        <Text>. It was created under Executive Order No. 128 signed on January 30, 1987. As such, the Institute is committed to pursue the goals and objectives of the National Science and Technology Plan (NSTP) and the Philippine Plan of Action for Nutrition (PPAN).
                        </Text>
                    </Text>
                    <Text style={styles.bodyText}>
                        <Text>{'\n'}The FNRI began as the Institute of Nutrition (IN), serving as a clearinghouse of data and information on food and nutrition by virtue of Executive Order No. 94 on July 1, 1947. With the creation of the National Science Development Board in 1958, the institute was renamed the Food and Nutrition Research Center (FNRC). In 1975, the Center became known as the Food and Nutrition Research Institute by virtue of Presidential Decree (PD) 733. From a modest workforce of eight (8), the Institute now boasts of 166 well-trained and committed regular staff members.</Text>
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