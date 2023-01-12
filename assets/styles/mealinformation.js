import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors';

const mealinfoStyles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#34383d',
    },

    headerContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.08,
        justifyContent: 'center',
        paddingLeft: 10,
    },

    headerStyle: {
        //fontFamily: 'Montserrat-Bold',
        fontSize: 23,
        color: colors.primary_white,
    },

    glowinnerText:{
        color: colors.green_shade_4
    },

    textStyle: {
        //fontFamily: 'Montserrat-regular',
        fontSize: 16,
        paddingRight: 30,
        color: colors.primary_white,
    },

    boldtextStyle: {
        //fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        paddingRight: 10,
        color: colors.primary_white,
    },
     
    ReminderboldtextStyle: {
        //fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        paddingRight: 10,
        color: colors.red_shade_1,
    },

    textContainer: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height,
        alignContent: 'space-between',
    },

    totalCaloriesContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.03,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    remainingCaloriesTextContainer: {
        width: Dimensions.get('window').width * 0.775,
        height: Dimensions.get('window').height*0.1,
        paddingRight: 15,
    },
    
    remainingCaloriesContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.09,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    scrollContainer: {
        paddingHorizontal: 10,
        height: Dimensions.get('window').height * 0.9,
        width: Dimensions.get('window').width,
    },

    summaryContainer: {
        width: Dimensions.get('window').width*0.95,
        height: Dimensions.get('window').height * 0.4,
        alignContent: 'space-between',
    },

    summaryBorder: {
        width: Dimensions.get('window').width*0.93,
        height: Dimensions.get('window').height * 0.06,
        marginHorizontal: 10,
        justifyContent: 'center',
        borderBottomColor: colors.primary_white,
        borderBottomWidth: 3,
    },

    viewSuggestionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewSuggestionButton: {
        width: Dimensions.get('window').width*0.8,
        height: Dimensions.get('window').height*0.05,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: colors.primary_white,
    },

    buttonText: {
        //fontFamily: 'Montserrat-Bold',
        fontSize: 19,
        paddingRight: 30,
        color: colors.primary_black,
    },

    mealThumbContainer: {
        height: Dimensions.get('window').height * 0.07,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: colors.primary_white,
        marginHorizontal: 10,
        marginVertical: 20,
        paddingLeft: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray_shade_1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    mealThumbSecondContainer: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.1,
        paddingLeft: 10,
        backgroundColor: colors.beige,
    },

    mealThumbText: {
        //fontFamily: 'Montserrat',
        fontSize: 16,
        paddingLeft: 20,
        color: colors.primary_black,
    },

    thumbnailImage: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.1,
    },
});

export default mealinfoStyles;
