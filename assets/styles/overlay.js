import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors';

const overlayStyles = StyleSheet.create({
    overlay: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.9,
        borderRadius: 10,
        backgroundColor: colors.primary_white,
    },

    textStyle: {
        //fontFamily: 'Montserrat-regular',
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.primary_black,
        textAlign: 'justify',
    },
});

export default overlayStyles;