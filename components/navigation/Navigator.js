import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons'

// styles
import colors from "../../assets/styles/colors";

// import pages
import Home from "../screens/Home";
import Cam from "../screens/Camera";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import MealInfo from "../screens/MealInformation";
import FoodInformation from "../screens/FoodInformation";
import AboutFoodietectionPage1 from "../screens/AboutPage1";
import AboutFoodietectionPage2 from "../screens/AboutPage2";
import AboutFoodietectionPage3 from "../screens/AboutPage3";
import AboutFoodietectionPage4 from "../screens/AboutPage4";
import AboutFoodietectionPage5 from "../screens/AboutPage5";
import AboutFoodietectionPage6 from "../screens/AboutPage6";
import AboutFoodietectionPage7 from "../screens/AboutPage7";

const Stack = createStackNavigator();

export default function Navigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BuildingTabNavigator} options={{headerShown:false}} />
            <Stack.Screen name="Camera" component={BuildingTabNavigator} options={{headerShown:false}}/>
            <Stack.Screen name="Search" component={BuildingTabNavigator} options={{headerShown:false}} />
            <Stack.Screen name="Profile" component={BuildingTabNavigator} options={{headerShown:false}} />
            <Stack.Screen name="Meal Information" component={MealInfo} options={{
                headerShown:true,
                title: 'Meal Information',
                headerStyle: {
                    backgroundColor: colors.primary_black,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_white,
                    fontSize: 24,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="Food Information" component={FoodInformation} options={{
                headerShown:true,
                title: 'Meal Information',
                headerStyle: {
                    backgroundColor: colors.primary_black,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_white,
                    fontSize: 24,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="About Foodietection 1" component={AboutFoodietectionPage1} options={{
                headerShown:true,
                title: 'About Foodietection',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 18,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="About Foodietection 2" component={AboutFoodietectionPage2} options={{
                headerShown:true,
                title: 'About Foodietection',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 18,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="About Foodietection 3" component={AboutFoodietectionPage3} options={{
                headerShown:true,
                title: 'About Foodietection',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 18,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="About Foodietection 4" component={AboutFoodietectionPage4} options={{
                headerShown:true,
                title: 'About Foodietection',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 18,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="About Foodietection 5" component={AboutFoodietectionPage5} options={{
                headerShown:true,
                title: 'About Foodietection',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 18,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="About Foodietection 6" component={AboutFoodietectionPage6} options={{
                headerShown:true,
                title: 'About Foodietection',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 18,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Stack.Screen name="About Foodietection 7" component={AboutFoodietectionPage7} options={{
                headerShown:true,
                title: 'About Foodietection',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 18,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
        </Stack.Navigator>
    );
}

const BuildingTabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if(route.name === 'Home'){
                        iconName = focused? 'home' : 'home';
                        size = focused ? size + 8 : size;
                    } else if (route.name === 'Camera'){
                        iconName = focused? 'camera' : 'camera';
                        size = focused ? size + 8 : size;
                    } else if (route.name === 'Search'){
                        iconName = focused? 'search' : 'search';
                        size = focused ? size + 8 : size;
                    } else if (route.name === 'Profile'){
                        iconName = focused? 'account-circle' : 'account-circle';
                        size = focused ? size + 8 : size;
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },

                tabBarActiveTintColor: colors.yellow_shade_3,
                tabBarInactiveTintColor: colors.primary_black,
                tabBarShowLabel: true,
                })
        }
            
        >
            <Tab.Screen name="Home" component={Home} options={{headerShown:true,
                title: 'Home',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 24,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Tab.Screen name="Camera" component={Cam} options={{
                headerShown: true,
                title: 'Camera',
                headerStyle: {
                    backgroundColor: colors.primary_black,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_white,
                    fontSize: 24,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Tab.Screen name="Search" component={Search} options={{
                headerShown: true,
                title: 'Search',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },

                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 24,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: true,
                title: 'Profile',
                headerStyle: {
                    backgroundColor: colors.primary_white,
                },

                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colors.primary_black,
                    fontSize: 24,
                },
                headerTintColor: colors.yellow_shade_3,
                }} />
        </Tab.Navigator>
    )
}