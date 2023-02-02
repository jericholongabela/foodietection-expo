import React, { useContext } from 'react'
import { SafeAreaView, View, Text, ScrollView, Dimensions } from 'react-native'
import { Context } from '../global_context/GlobalContext.js'
import { LinearGradient } from 'expo-linear-gradient';

import homeStyles from '../../assets/styles/home';
import Card, { PurposeApp, DevApp, Fnri, Ggg, Nutrifact } from '../modules/card';
import { StatusBar } from "expo-status-bar";
import colors from '../../assets/styles/colors';
import { useState } from 'react';
import HomeCard from '../modules/homeCard.js';


export default function Home(){
    const globalContext = useContext(Context);
    const imgWidth = Dimensions.get('window').width * .45;
    const [ aboutTitles, setAboutTitles ] = useState([
        {title: 'What is this app?', id: 1},
        {title: 'What is the purpose of this app?', id: 2},
        {title: 'The Developers', id: 3},
    ]);
    const [ additionalTitles, setAdditionalTitles ] = useState([
        {title: 'Who is the FNRI?', id: 1},
        {title: 'What is the Go, Grow, Glow?', id: 2},
        {title: 'What are Nutritional Facts?', id: 3},
        {title: 'How can Nutritional Facts help me in my diet?', id: 4},
    ])

    return (
        <SafeAreaView style={homeStyles.screen}>
            <StatusBar />
            <ScrollView nestedScrollEnabled={true} style={homeStyles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View name='About Foodietection'>
                    <LinearGradient colors={[colors.green_shade_3, '#FFFFFF']}
                        start={{ x: 0.3, y: 1 }}
                        end={{ x: 1, y: 1 }}> 
                        <View style={homeStyles.headerContainer}>
                            <Text style={homeStyles.headerStyle}>About Foodietection:</Text>
                        </View>
                    </LinearGradient>
                    <View style={{margin: 10}}>
                        <ScrollView horizontal={true} alwaysBounceHorizontal={true}
                            style={homeStyles.infoClusterContainer}
                            contentContainerStyle={homeStyles.infoClusterContainerStyle}
                            showsHorizontalScrollIndicator={false}>
                            {aboutTitles.map((item, index) => {
                                return(
                                    <HomeCard key={index} textProps={item.title}/>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                
                <View name='Additional Information'>
                    <LinearGradient colors={[colors.yellow_shade_3, '#FFFFFF']}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                        <View style={homeStyles.headerContainer}>
                            <Text style={homeStyles.headerStyle}>Additional Information:</Text>
                        </View>
                    </LinearGradient>
                    <View style={{margin: 10}}>
                        <ScrollView horizontal={true} alwaysBounceHorizontal={true}
                            style={homeStyles.infoClusterContainer}
                            contentContainerStyle={homeStyles.infoClusterContainerStyle}
                            showsHorizontalScrollIndicator={false}>
                            {additionalTitles.map((item, index) => {
                                return(
                                    <HomeCard key={index} textProps={item.title}/>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                
                <View name='Our Partners:'>
                    <LinearGradient colors={[colors.red_shade_2, '#FFFFFF']}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                        <View style={homeStyles.headerContainer}>
                            <Text style={homeStyles.headerStyle}>Our Partners:</Text>
                        </View>
                    </LinearGradient>
                    <View style={{margin: 10}}>
                        <ScrollView horizontal={true} alwaysBounceHorizontal={true}
                            style={[homeStyles.infoClusterContainer, {height: Dimensions.get('window').height * 0.15,}]}
                            contentContainerStyle={homeStyles.imgClusterContainer}
                            showsHorizontalScrollIndicator={false}>
                            <Card img={require("../../assets/images/DOST_FNRI_logo.png")} />
                            <Card img={require("../../assets/images/Nutritionix_logo.png")}
                                imgStyle={{width: imgWidth,}}
                                imgContainerStyle={{width: Dimensions.get('window').width * .5}}
                            />
                        </ScrollView>
                        <View style={{height: 20}}></View>
                    </View>
                </View>
                <View name='Our Partners:' style={{marginVertical: 10, height: Dimensions.get('window').height * 0.1,}}>
                </View>
            </ScrollView>
            {/* <NavigationBar /> */}
        </SafeAreaView>
    )
}