import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";

export default function SearchResult( {foodName} ) {
    return(
        <TouchableOpacity style={styles.ResultContainer}>
            <Text style={styles.ResultText}>{foodName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ResultContainer: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.05,
        marginVertical: Dimensions.get('screen').height * 0.005,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.gray_shade_2,
    },
    ResultText: {
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 16,
        color: colors.primary_black,
    },
});