import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors';

const homeStyles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.primary_white,
        alignItems: 'center',
    },
    scrollContainer: {
        height: Dimensions.get('window').height * .85,
        width: Dimensions.get('window').width,
    },
    infoClusterContainer: {
        height: Dimensions.get('window').height * 0.25,
    },
    imgClusterContainer: {
        height: Dimensions.get('window').height * 0.15,
    },
    infoClusterContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.025,
        justifyContent: 'center',
        paddingLeft: 10,
        marginVertical: 10,
    },
    headerStyle: {
        //fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.primary_black,
    },
});

export default homeStyles;