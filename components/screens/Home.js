import React, { useContext } from 'react'
import { SafeAreaView, View, Text, ScrollView, Dimensions } from 'react-native'
import { Context } from '../global_context/GlobalContext.js'
import { LinearGradient } from 'expo-linear-gradient';

import homeStyles from '../../assets/styles/home';
import Header from '../modules/Header.js';
import Card, { PurposeApp, DevApp, Fnri, Ggg, Nutrifact } from '../modules/card';
import NavigationBar from '../modules/NavigationBar';
import WhatApp from '../modules/card';


export default function Home(){
    const globalContext = useContext(Context);
    const { isLoggedIn } = globalContext;
    const imgWidth = Dimensions.get('window').width * .45;
    const imgHeight = Dimensions.get('window').height * .08;

    return (
        <SafeAreaView style={homeStyles.screen}>
            <Header textProps={"Information Center"} />
            <ScrollView nestedScrollEnabled={true} style={homeStyles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View name='About Foodietection' style={{flex: 20, marginVertical: 10,}}>
                <LinearGradient colors={['#006a00', '#FFFFFF']}
                start={{ x: 0.3, y: 1 }}
                end={{ x: 1, y: 1 }}> 
                    <View style={homeStyles.headerContainer}>
                        <Text style={homeStyles.headerStyle}>About Foodietection:</Text>
                    </View>
                    </LinearGradient>
                    </View>
                <View>
                    <ScrollView horizontal={true} alwaysBounceHorizontal={true}
                        style={homeStyles.infoClusterContainer}
                        contentContainerStyle={homeStyles.infoClusterContainerStyle}
                        showsHorizontalScrollIndicator={false}>
                        <WhatApp text={"What is this app?"}></WhatApp>
                        <PurposeApp text={"What is the purpose of this app?"}></PurposeApp>
                        <DevApp text={"The Developers"}></DevApp>
                    </ScrollView>
                </View>
                <View name='Additional Information' style={{marginVertical: 10,}}>
                    <LinearGradient colors={['#FFC000', '#FFFFFF']}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                    <View style={homeStyles.headerContainer}>
                        <Text style={homeStyles.headerStyle}>Additional Information:</Text>
                    </View>
                    </LinearGradient>
                    </View>
                <View>
                    <ScrollView horizontal={true} alwaysBounceHorizontal={true}
                        style={homeStyles.infoClusterContainer}
                        contentContainerStyle={homeStyles.infoClusterContainerStyle}
                        showsHorizontalScrollIndicator={false}>
                        <Fnri text={"Who is the FNRI?"}></Fnri>
                        <Ggg text={"What is Go, Grow, Glow?"}></Ggg>
                        <Nutrifact text={"What are Nutritional Facts"}></Nutrifact>
                        <Card text={"How can Nutritional Facts help me in my daily diet"}></Card>
                    </ScrollView>
                </View>
                <View name='Our Partners:' style={{marginVertical: 10,}}>
                    <View style={homeStyles.headerContainer}>
                        <Text style={homeStyles.headerStyle}>Our Partners:</Text>
                    </View>
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
                </View>
                <View name='Our Partners:' style={{marginVertical: 10, height: Dimensions.get('window').height * 0.1,}}>
                </View>
            </ScrollView>
            <NavigationBar />
        </SafeAreaView>
    )
}