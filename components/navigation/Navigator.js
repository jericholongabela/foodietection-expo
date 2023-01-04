import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// styles
import colors from "../../assets/styles/colors";
import { useFonts } from 'expo-font';

// import pages
import Home from "../screens/Home";
import Cam from "../screens/Camera";
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function Navigator(props) {
    const [loaded] = useFonts(
        {'Helvetica': require('../../assets/fonts/Helvetica.ttf')}
    );
    return (
        <Stack.Navigator initialRouteName='Camera'>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown:true,
                title: 'Home',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    color: colors.primary_black,
                    fontSize: 24,
                }
                }} />
            <Stack.Screen name="Camera" component={Cam} options={{
                headerShown:true,
                title: 'Camera',
                headerStyle: {
                    backgroundColor: colors.primary_black,
                },
                headerTitleStyle: {
                    color: colors.primary_white,
                    fontSize: 24,
                }
                }} />
            <Stack.Screen name="Search" component={Search} options={{
                headerShown:true,
                title: 'Search for Food',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    color: colors.primary_black,
                    fontSize: 24,
                }
                }} />
        </Stack.Navigator>
    );
}