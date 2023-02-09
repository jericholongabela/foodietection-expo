import React, {useContext} from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/styles/colors";
import { useNavigation } from "@react-navigation/native";

import { Context } from "../global_context/GlobalContext";

export default function SuggestionResult( {foodName} ) {
    const navigation = useNavigation();
    const { suggestionOverlay, setSuggestionOverlay } = useContext(Context);

    function closeOverlayNextPage(){
        setSuggestionOverlay(!suggestionOverlay);
        navigation.navigate("Food Information", { data: foodName})
    }

    return(
        <TouchableOpacity style={styles.ResultContainer} onPress={() => closeOverlayNextPage()}>
            <Text style={styles.ResultText}>{foodName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ResultContainer: {
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.06,
        marginVertical: Dimensions.get('screen').height * 0.005,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.gray_shade_2,
    },
    ResultText: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary_black,
    },
});