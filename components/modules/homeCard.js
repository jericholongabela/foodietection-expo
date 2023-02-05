import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";

import colors from "../../assets/styles/colors";

export default function HomeCard( { textProps } ){
    const navigation = useNavigation();
    console.log(textProps);

    function navigateToScreen () {
        if (textProps == "What is this app?"){
            navigation.navigate("About Foodietection 1")
        }
        if (textProps == "What is the purpose of this app?") {
            navigation.navigate("About Foodietection 2")
        }
        if (textProps == "The Developers") {
            navigation.navigate("About Foodietection 3")
        }
        if (textProps == "Who is the FNRI?") {
            navigation.navigate("About Foodietection 4")
        }
        if (textProps == "What is the Go, Grow, Glow?") {
            navigation.navigate("About Foodietection 5")
        }
    }

    return (
        <TouchableOpacity style={styles.card} onPress={ navigateToScreen } >
            <View style={styles.secondContainer}>
                <Text style={styles.text}>{textProps}</Text>
            </View>
            <View style={styles.circleContainer}>
                <View style={styles.circle}>
                    <Icon name="navigate-next" style={styles.icon} size={25} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.295,
        height: Dimensions.get('window').height * 0.25,

        marginHorizontal: Dimensions.get('window').width * 0.01,

        borderWidth: 1,
        borderRightWidth: 2,
        borderBottomWidth: 3,
        borderRadius: 10,
        borderColor: colors.gray_shade_1,

        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    secondContainer: {
        flex:3,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    circle: {
        borderRadius: 50,
        backgroundColor: colors.pink,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    icon: {
        color: colors.primary_white,
    }
});