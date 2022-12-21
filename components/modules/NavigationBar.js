import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from '../../assets/styles/colors';

export default function NavigationBar( {} ){
    const navigation = useNavigation();

    return (
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.buttonContainer}>
                    <Icon name="home" style={styles.icon} size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Camera")} style={styles.buttonContainer}>
                    <Icon name="photo-camera" style={styles.icon} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Icon name="search" style={styles.icon} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Icon name="account-circle" style={styles.icon} size={25} />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    navigationBar: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.06,
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: colors.primary_white,
        marginTop: Dimensions.get('window').height * 0.85,
        justifyContent: 'space-around',
    },
    buttonContainer: {
        width: Dimensions.get('window').width * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: colors.primary_black,
    },
});