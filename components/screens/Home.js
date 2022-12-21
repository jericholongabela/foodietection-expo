import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from "expo-status-bar";

import NavigationBar from '../modules/NavigationBar';
import colors from '../../assets/styles/colors';

export default function Home(){
    return(
        <SafeAreaView style={styles.screen}>
            <StatusBar style="light" />
            <View>
                <Text>This page is the Home page</Text>
            </View>
            <NavigationBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.primary_white,
        alignItems: 'center',
    },
});