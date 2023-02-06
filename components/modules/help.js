import React, {useContext} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { Overlay, Icon } from '@rneui/themed';
import { Touchable } from "react-native";
import { Context } from "../global_context/GlobalContext";
import colors from "../../assets/styles/colors";
import { ScrollView } from "react-native-gesture-handler";

export default function HelpOverlay ( foodGroup ) {
    const { help, setHelpToggle } = useContext(Context);
    console.log(foodGroup.foodGroup);

    return (
        <Overlay overlayStyle={styles.overlay}>
            <TouchableOpacity style={styles.close} onPress={ ()=> setHelpToggle(!help) }>
                <Icon name="close" type="material" size={30} />
            </TouchableOpacity>
            <ScrollView>
                <View>
                    <Text style={styles.title}>
                        <Text>What are </Text>
                        {foodGroup.foodGroup === 'GO' ? 
                        <Text style={{color: colors.yellow_shade_3}}>{foodGroup.foodGroup}</Text> : null
                        }
                        {foodGroup.foodGroup === 'GROW' ? 
                        <Text style={{color: colors.red_shade_1}}>{foodGroup.foodGroup}</Text> : null
                        }
                        {foodGroup.foodGroup === 'GLOW' ? 
                        <Text style={{color: colors.green_shade_3}}>{foodGroup.foodGroup}</Text> : null
                        }
                        <Text> foods?{'\n'}</Text>
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    {foodGroup.foodGroup === 'GO' ? 
                    <Image source={require('../../assets/images/Go.png')} style={styles.image}/> : null
                    }
                    {foodGroup.foodGroup === 'GROW' ? 
                    <Image source={require('../../assets/images/Grow.jpg')} style={styles.image}/> : null
                    }
                    {foodGroup.foodGroup === 'GLOW' ? 
                    <Image source={require('../../assets/images/Glow.png')} style={styles.image}/> : null
                    }
                </View>
                <View>
                    {foodGroup.foodGroup === 'GO' ?
                    <Text style={styles.bodyText}>
                        {'\n'}
                        <Text style={{fontWeight: 'bold', color: colors.yellow_shade_1}}>{'\n'}Go foods</Text>
                        <Text> are the type of food that provide fuel and help us ‘go’ and be active. Examples of ‘Go’ foods include bread, rice, pasta, cereals and potato. These foods give our muscles fuel to run, swim, jump, cycle and our brain fuel to concentrate. If we don’t eat enough ‘Go’ foods then we can feel tired and won’t have enough fuel to get through the day. It’s important to include ‘Go’ foods at all meals and especially breakfast so that our body and brain can get ready for the busy school day ahead.{'\n'}</Text>
                    </Text> : null
                    }
                    {foodGroup.foodGroup === 'GROW' ?
                    <Text style={styles.bodyText}>
                    {'\n'}
                        <Text style={{fontWeight: 'bold', color: colors.red_shade_2}}>{'\n'}Grow foods</Text>
                        <Text> are the type of food that provide fuel and help us ‘go’ and be active. Examples of ‘Go’ foods include bread, rice, pasta, cereals and potato. These foods give our muscles fuel to run, swim, jump, cycle and our brain fuel to concentrate. If we don’t eat enough ‘Go’ foods then we can feel tired and won’t have enough fuel to get through the day. It’s important to include ‘Go’ foods at all meals and especially breakfast so that our body and brain can get ready for the busy school day ahead.{'\n'}</Text>
                    </Text> : null
                    }
                    {foodGroup.foodGroup === 'GLOW' ?
                    <Text style={styles.bodyText}>
                    {'\n'}
                        <Text style={{fontWeight: 'bold', color: colors.green_shade_3}}>{'\n'}Glow foods</Text>
                        <Text> are full of vitamins and minerals to keep our skin, hair and eyes bright and glowing. ‘Glow’ foods can keep our immune system strong so that we can fight bugs and viruses. Examples of ‘Glow’ foods include all fruits and vegetables. Brightly coloured fruits and vegetables are full of vitamins and minerals and we need to eat different types every day. What did you eat yesterday – were there lots of different coloured fruit and vegetables? Try and eat fruit and vegetables from every colour of the rainbow are to make sure you’re getting enough ‘Glow’ foods.</Text>
                    </Text> : null
                    }
                    
                </View>
            </ScrollView>
        </Overlay>
    );
}

const styles = StyleSheet.create({
    overlay: {
        height: Dimensions.get('screen').height * 0.8,
        width: Dimensions.get('screen').width * 0.9,
    },
    close: {
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.3,
    },
    bodyText: {
        fontSize: 16,
    },
});