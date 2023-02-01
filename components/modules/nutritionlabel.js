import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../assets/styles/colors";

export default function NutritionLabel(
    {
    servingsPerContainer,
    servingUnit,
    servingWeight,
    calories,
    totalFatAmount,
    totalFatPercentage,
    saturatedFatAmount,
    saturatedFatPercentage,
    transFatAmount,
    cholesterolAmount,
    cholesterolPercentage,
    sodiumAmount,
    sodiumPercentage,
    totalCarbohydrateAmount,
    totalCarbohydratePercentage,
    dietaryFiberAmount,
    dietaryFiberPercentage,
    totalSugarsAmount,
    totalSugarsPercentage,
    proteinAmount,
    vitaminAAmount,
    vitaminAPercentage,
    vitaminCAmount,
    vitaminCPercentage,
    calciumAmount,
    calciumPercentage,
    ironAmount,
    ironPercentage,
}
){
    return(
        <View style={styles.NutritionLabelContainer}>
            <View style={styles.NutritionFactsContainer}>
                <Text style={styles.NutritionFacts}>Nutrition Facts</Text>
            </View>
            <View style={styles.ServingsInfoContainer}>
                <Text style={styles.ServingPerContainer}>{servingsPerContainer} servings per container</Text>
                <View style={styles.ServingSizeContainer}>
                    <Text style={styles.ServingSizeLabel}>Serving Size</Text>
                    <Text style={styles.ServingSize}>{servingsPerContainer} {servingUnit} ({servingWeight}g)</Text>
                </View>
            </View>
            <View style={styles.AmountPerServingContainer}>
                <View style={styles.AmountPerServingAndCaloriesContainer}>
                    <Text style={styles.AmountPerServingLabel}>Amount per serving</Text>
                    <Text style={styles.CaloriesLabel}>Calories</Text>
                </View>
                <Text style={styles.Calories}>{calories}</Text>
            </View>
            <View style={styles.OtherInformationContainer}>
                <View style={styles.PercentDailyValueLabelContainer}>
                    <Text style={styles.PercentDailyValueLabel}>% RENI*</Text>
                </View>
                <View style={styles.TotalFatInfoContainer}>
                    <View style={styles.TotalFatLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Total Fat</Text>
                        <Text style={styles.NutrientAmount}>{totalFatAmount}g</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{totalFatPercentage}%</Text>
                </View>
                <View style={styles.SaturatedFatInfoContainer}>
                    <View style={styles.SaturatedFatLabelAmountContainer}>
                        <Text style={styles.SubNutrientLabel}>Saturated Fat</Text>
                        <Text style={styles.NutrientAmount}>{saturatedFatAmount}g</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{saturatedFatPercentage}</Text>
                </View>
                <View style={styles.TransFatInfoContainer}>
                    <View style={styles.TransFatLabelAmountContainer}>
                        <Text style={styles.SpecialNutrientLabel}>Trans</Text>
                        <Text style={styles.SubNutrientLabel}> Fat</Text>
                        <Text style={styles.NutrientAmount}>{transFatAmount}g</Text>
                    </View>
                </View>
                <View style={styles.CholesterolInfoContainer}>
                    <View style={styles.CholesterolLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Cholesterol</Text>
                        <Text style={styles.NutrientAmount}>{cholesterolAmount}mg</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{cholesterolPercentage}%</Text>
                </View>
                <View style={styles.SodiumInfoContainer}>
                    <View style={styles.SodiumLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Sodium</Text>
                        <Text style={styles.NutrientAmount}>{sodiumAmount}mg</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{sodiumPercentage}%</Text>
                </View>
                <View style={styles.TotalCarbohydrateInfoContainer}>
                    <View style={styles.TotalCarbohydrateLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Total Carbohydrate</Text>
                        <Text style={styles.NutrientAmount}>{totalCarbohydrateAmount}g</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{totalCarbohydratePercentage}%</Text>
                </View>
                <View style={styles.DietaryFiberInfoContainer}>
                    <View style={styles.DietaryFiberLabelAmountContainer}>
                        <Text style={styles.SubNutrientLabel}>Dietary Fiber</Text>
                        <Text style={styles.NutrientAmount}>{dietaryFiberAmount}g</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{dietaryFiberPercentage}%</Text>
                </View>
                <View style={styles.TotalSugarsInfoContainer}>
                    <View style={styles.TotalSugarsLabelAmountContainer}>
                        <Text style={styles.SubNutrientLabel}>Total Sugars</Text>
                        <Text style={styles.NutrientAmount}>{totalSugarsAmount}g</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{totalSugarsPercentage}</Text>
                </View>
                <View style={styles.ProteinInfoContainer}>
                    <View style={styles.ProteinLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Protein</Text>
                        <Text style={styles.NutrientAmount}>{proteinAmount}g</Text>
                    </View>
                </View>
            </View>
            <View style={styles.VitaminsInfoContainer}>
                <View style={styles.VitaminAInfoContainer}>
                    <View style={styles.VitaminALabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Vitamin A</Text>
                        <Text style={styles.NutrientAmount}>{vitaminAAmount}μg</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{vitaminAPercentage}%</Text>
                </View>
                <View style={styles.VitaminCInfoContainer}>
                    <View style={styles.VitaminCLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Vitamin C</Text>
                        <Text style={styles.NutrientAmount}>{vitaminCAmount}mg</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{vitaminCPercentage}%</Text>
                </View>
                <View style={styles.CalciumInfoContainer}>
                    <View style={styles.CalciumLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Calcium</Text>
                        <Text style={styles.NutrientAmount}>{calciumAmount}mg</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{calciumPercentage}%</Text>
                </View>
                <View style={styles.IronInfoContainer}>
                    <View style={styles.IronLabelAmountContainer}>
                        <Text style={styles.MainNutrientLabel}>Iron</Text>
                        <Text style={styles.NutrientAmount}>{ironAmount}mg</Text>
                    </View>
                    <Text style={styles.PercentDailyValuePercentage}>{ironPercentage}%</Text>
                </View>
            </View>
            <View style={styles.FooterContainer}>
                <Text style={styles.FooterText}>*The % Recommended Energy and Nutrient Intake (RENI) tells you how much a nutrient in a serving of food contributes to a daily nutrient intake of an Adult with an average weight of 60.5</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NutritionLabelContainer: {
        height: Dimensions.get('window').height * 0.8,
        width: Dimensions.get('window').width * 0.9,
        borderWidth: 1,
        borderColor: colors.primary_black,
        paddingBottom: Dimensions.get('window').width * 0.015,
        paddingRight: Dimensions.get('window').width * 0.015,
        paddingLeft: Dimensions.get('window').width * 0.015,
    },
    NutritionFactsContainer: {
        height: Dimensions.get('window').height * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    NutritionFacts: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 44,
        color: colors.primary_black,
    },
    ServingsInfoContainer: {
        height: Dimensions.get('window').height * 0.0725,
        justifyContent: 'center',
        borderBottomWidth: 8,
    },
    ServingPerContainer: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.primary_black,
    },
    ServingSizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ServingSizeLabel: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.primary_black,
    },
    ServingSize: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.primary_black,
    },
    AmountPerServingContainer: {
        height: Dimensions.get('window').height * 0.075,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 4,
        flexDirection: 'row',
    },
    AmountPerServingAndCaloriesContainer: {
        flexDirection: 'column',
    },
    AmountPerServingLabel: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.primary_black,
    },
    CaloriesLabel: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.primary_black,
    },
    Calories: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 45,
        color: colors.primary_black,
    },
    OtherInformationContainer: {
        borderBottomWidth: 8,
    },
    MainNutrientLabel: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: colors.primary_black,
        fontSize: 16,
    },
    NutrientAmount: {
        fontFamily: 'Helvetica',
        color: colors.primary_black,
        fontSize: 16,
        marginLeft: 10,
    },
    PercentDailyValueLabel: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: colors.primary_black,
        fontSize: 18,
    },
    PercentDailyValuePercentage: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: colors.primary_black,
        fontSize: 16,
    },
    SubNutrientLabel: {
        fontFamily: 'Helvetica',
        color: colors.primary_black,
        fontSize: 16,
    },
    SpecialNutrientLabel: {
        fontFamily: 'Helvetica',
        fontWeight: 'Oblique',
        color: colors.primary_black,
        fontSize: 16,
    },
    PercentDailyValueLabelContainer: {
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'center',
    },
    TotalFatInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SaturatedFatInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TransFatInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
        alignItems: 'center',
    CholesterolInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SodiumInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TotalCarbohydrateInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    DietaryFiberInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TotalSugarsInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProteinInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TotalFatLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SaturatedFatLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    TransFatLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    CholesterolLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SodiumLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    TotalCarbohydrateLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    DietaryFiberLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    TotalSugarsLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    ProteinLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    VitaminsInfoContainer: {
        borderBottomWidth: 4,
    },
    VitaminAInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    VitaminCInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    CalciumInfoContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.gray_shade_2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    IronInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    VitaminALabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    VitaminCLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    CalciumLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    IronLabelAmountContainer: {
        width: Dimensions.get('window').width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    FooterText: {
        fontFamily: 'Helvetica',
        color: colors.gray_shade_2,
    },
});