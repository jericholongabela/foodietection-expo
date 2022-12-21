import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../assets/styles/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function Header( {textProps} ){
    const navigation = useNavigation();

    function goBack (){
        navigation.navigate('Home');
    }

    return (
        <>
            {textProps != "Profile"? null: (
            <View style={styles.headerContainer}>
                <View style={styles.headingContainerStyle}>
                    <Text style={styles.headerText}>{textProps}</Text>
                </View>
                <View style={styles.buttonContainerStyle}>
                    <TouchableOpacity style={styles.buttonStyle}>
                         <Text style={styles.buttonTextStyle}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )}

            {textProps != "Meal Information"? null: (
            <View style={styles.backButtonHeader}>
                <TouchableOpacity style={styles.backButtonContainer} onPress={goBack}>
                    <Icon name="chevron-left" size={20}/>
                    <Text style={styles.backTextStyle}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>{textProps}</Text>
            </View>
            )}

            {textProps == "Profile" || textProps == "Meal Information"? null: (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{textProps}</Text>
            </View>
            )}
        </>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.075, 
        backgroundColor: colors.primary_white,
        borderBottomWidth: 0.5,
        borderColor: colors.gray_shade_2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        color: colors.primary_black,
    },
    headingContainerStyle: {
        width: Dimensions.get('screen').width * .5,
        paddingLeft: 20,
        justifyContent: 'center',
    },
    buttonContainerStyle: {
        width: Dimensions.get('screen').width * .5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    buttonStyle: {
        height: Dimensions.get('screen').height * 0.05,
        width: Dimensions.get('screen').width * 0.3,
        marginRight: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.pink
    },
    buttonTextStyle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.primary_white,
    },
    backButtonHeader: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.075, 
        backgroundColor: colors.primary_white,
        borderBottomWidth: 0.5,
        borderColor: colors.gray_shade_2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    backButtonContainer: {
        height: Dimensions.get('screen').height * 0.05,
        width: Dimensions.get('screen').width * 0.2,
        marginRight: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backTextStyle: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: colors.primary_black,
    },
});