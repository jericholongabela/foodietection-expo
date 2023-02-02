import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function AboutFoodietectionPage3( props ){
    return(
        <View style={styles.screen}>
            <ScrollView style={{marginBottom: Dimensions.get('screen').height * .02}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>The Developers {'{'} {'}'}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>
                        <Text>The developers of this application are fourth year students of the </Text>
                        <Text style={{fontStyle: 'italic'}}>Polytechnic University of the Philippines.</Text>
                        <Text>{'\n\n'}The team consists of the following members:</Text>
                    </Text>
                    <View style={styles.developerContainer}>
                        <View style={{alignItems: 'center',}}>
                            <Image source={require('../../assets/images/Developers/JessieID.png')} style={styles.developerImage}/>
                            <Text style={styles.developerText}>Jessie{'\n'}Kadusale</Text>
                        </View>
                        
                        <View style={{alignItems: 'center',}}>
                            <Image source={require('../../assets/images/Developers/JerichoID.png')} style={styles.developerImage}/>
                            <Text style={styles.developerText}>Jericho{'\n'}Longabela</Text>
                        </View>
                    </View>
                    <View style={styles.developerContainer}>
                        <View style={{alignItems: 'center',}}>
                            <Image source={require('../../assets/images/Developers/JessieID.png')} style={styles.developerImage}/>
                            <Text style={styles.developerText}>Mark Vincent{'\n'}Divida</Text>
                        </View>
                        
                        <View style={{alignItems: 'center',}}>
                            <Image source={require('../../assets/images/Developers/JessieID.png')} style={styles.developerImage}/>
                            <Text style={styles.developerText}>Miguel Andrei{'\n'}Liwanag</Text>
                        </View>
                    </View>
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
        textDecorationStyle: 'dashed',
        textDecorationColor: colors.red_shade_1,
    },
    bodyContainer: {
        paddingHorizontal:Dimensions.get('screen').width * 0.05,
    },
    bodyText: {
        fontSize: 20,
    },
    developerContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    developerImage: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray_shade_2,
    },
    developerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});