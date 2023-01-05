import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors';

const searchStyles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.primary_white,
        alignItems: 'center',
    },

    mainBody: {
        paddingHorizontal: Dimensions.get('window').width * 0.01,
        alignItems: 'center',
    },

    input: { 
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: colors.gray_shade_2,
        borderWidth: 2,
        borderRadius: 10, 
        fontSize: 16,
        marginTop: 30,
    },

    SearchArea: {
        height: Dimensions.get('window').height * 0.55,
    },

    MoreInformation: {
        height: Dimensions.get('window').height * 0.2,
    },

    infoContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.12,
        marginTop: Dimensions.get('window').height * 0.01,
        paddingLeft: 10,
        paddingTop: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray_shade_2,
    },

    headerContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.08,
        justifyContent: 'center',
        paddingLeft: 20,
    },

    headerStyle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 23,
        color: colors.primary_black,
    },

    textStyle: {
        fontFamily: 'Montserrat-regular',
        fontSize: 16,
        paddingRight: 30,
    },
    list: {
        alignItems: 'center',
    },
});


export default searchStyles;