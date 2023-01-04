import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors';

const overlayStyles = StyleSheet.create({
    overlay: {
        width: Dimensions.get('window').width * 0.93,
        height: Dimensions.get('window').height * 0.9,
        backgroundColor: colors.primary_white,
    },

    textStyle: {
        fontFamily: 'Montserrat-regular',
        fontSize: 18,
        paddingRight: 30,
        color: colors.primary_black,
    },
});

export default overlayStyles;