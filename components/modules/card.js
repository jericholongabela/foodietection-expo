import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Overlay } from '@rneui/themed';
import colors from '../../assets/styles/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import homeStyles from '../../assets/styles/home';
import overlayStyles from '../../assets/styles/overlay';

export default function WhatApp({ text, color, img, imgStyle, imgContainerStyle, }){

    const [home, setHome] = useState([
        {text: 'whatApp'    , id: '1' },
        {text: 'purposeApp' , id: '2' },
        {text: 'devApp'     , id: '3' },
        {text: 'fnri'       , id: '4' },
        {text: 'ggg'        , id: '5' },
        {text: 'nutrifact'  , id: '6' },
    ]);
    
    const [visible, setVisible] = useState (false);
    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <>
            {img != null ? null : (
                <TouchableOpacity style={[styles.container, {backgroundColor: color}]}  onPress={toggleOverlay} >
                    <View style={styles.secondContainer}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Icon name="chevron-right" style={styles.icon} size={25} />
                        </View>
                    </View>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                This application is called Foodietection.
                                {'\n\n'}
                                The app is made by 4th year students of Polytechnic University of the Philippines-College of Computer and Information Sciences.
                                {'\n\n'}
                                This application is made in partial fulfillment of the requirement for the Degree of Bachelor of Science in Computer Science.
                                {'\n\n'}
                                This application is made to supplement the dissemination of Food nutrition information to the users.
                            </Text>
                        </View>
                     </Overlay>
                </TouchableOpacity>
            )}
            
            {img == null ? null : (
            <View style={[styles.imgContainer, {backgroundColor: color}, imgContainerStyle]}>
                <Image source={img} style={[styles.image, imgStyle]} resizeMode={'center'} />
            </View>
            )}
        </>
    )
}

export function PurposeApp({ text, color, img, imgStyle, imgContainerStyle, }){

    const [home, setHome] = useState([
        {text: 'whatApp'    , id: '1' },
        {text: 'purposeApp' , id: '2' },
        {text: 'devApp'     , id: '3' },
        {text: 'fnri'       , id: '4' },
        {text: 'ggg'        , id: '5' },
        {text: 'nutrifact'  , id: '6' },
    ]);
    
    const [visible, setVisible] = useState (false);
    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <>
            {img != null ? null : (
                <TouchableOpacity style={[styles.container, {backgroundColor: color}]}  onPress={toggleOverlay} >
                    <View style={styles.secondContainer}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Icon name="chevron-right" style={styles.icon} size={25} />
                        </View>
                    </View>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                The purpose of this application is to supplement the relevant food information that the user needs. As we know, information is readily available online but few are actively looking for it. 
                                {'\n\n'}
                                This application was made by the proponents so that it will be easier for the users to get relevant nutritional information of their food just by using their phone camera.
                            </Text>
                        </View>
                     </Overlay>
                </TouchableOpacity>
            )}
            
            {img == null ? null : (
            <View style={[styles.imgContainer, {backgroundColor: color}, imgContainerStyle]}>
                <Image source={img} style={[styles.image, imgStyle]} resizeMode={'center'} />
            </View>
            )}
        </>
    )
}

export function DevApp({ text, color, img, imgStyle, imgContainerStyle, }){

    const [home, setHome] = useState([
        {text: 'whatApp'    , id: '1' },
        {text: 'purposeApp' , id: '2' },
        {text: 'devApp'     , id: '3' },
        {text: 'fnri'       , id: '4' },
        {text: 'ggg'        , id: '5' },
        {text: 'nutrifact'  , id: '6' },
    ]);
    
    const [visible, setVisible] = useState (false);
    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <>
            {img != null ? null : (
                <TouchableOpacity style={[styles.container, {backgroundColor: color}]}  onPress={toggleOverlay} >
                    <View style={styles.secondContainer}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Icon name="chevron-right" style={styles.icon} size={25} />
                        </View>
                    </View>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                Who are the developers?
                                {'\n\n'}
                                The developers of this app are 4th Year BSCS students of Polytechnic University of the Philippines.
                                {'\n\n'}
                                They are:
                                {'\n'}
                                Mark Vincent Divida
                                {'\n'}
                                Jessie Kadusale
                                {'\n'}
                                Miguel Andrei Liwanag
                                {'\n'}
                                Jericho Longabela
                                {'\n\n'}
                                This app was developed by them as a partial completion for the degree of Computer Science.
                            </Text>
                        </View>
                     </Overlay>
                </TouchableOpacity>
            )}
            
            {img == null ? null : (
            <View style={[styles.imgContainer, {backgroundColor: color}, imgContainerStyle]}>
                <Image source={img} style={[styles.image, imgStyle]} resizeMode={'center'} />
            </View>
            )}
        </>
    )
}

export function Fnri({ text, color, img, imgStyle, imgContainerStyle, }){

    const [home, setHome] = useState([
        {text: 'whatApp'    , id: '1' },
        {text: 'purposeApp' , id: '2' },
        {text: 'devApp'     , id: '3' },
        {text: 'fnri'       , id: '4' },
        {text: 'ggg'        , id: '5' },
        {text: 'nutrifact'  , id: '6' },
    ]);
    
    const [visible, setVisible] = useState (false);
    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <>
            {img != null ? null : (
                <TouchableOpacity style={[styles.container, {backgroundColor: color}]}  onPress={toggleOverlay} >
                    <View style={styles.secondContainer}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Icon name="chevron-right" style={styles.icon} size={25} />
                        </View>
                    </View>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                            The Food and Nutrition Research Institute (FNRI) undertakes researches that define the citizenry’s
                            nutritional status, with reference particularly to the malnutrition problem, its causes and effects;
                            develops and recommends policy options, strategies, programs and projects which address the
                            malnutrition problem for implementation by appropriate agencies. It disseminates its research findings
                            and recommendations to relevant end-users.
                            </Text>
                        </View>
                     </Overlay>
                </TouchableOpacity>
            )}
            
            {img == null ? null : (
            <View style={[styles.imgContainer, {backgroundColor: color}, imgContainerStyle]}>
                <Image source={img} style={[styles.image, imgStyle]} resizeMode={'center'} />
            </View>
            )}
        </>
    )
}

export function Ggg({ text, color, img, imgStyle, imgContainerStyle, }){

    const [home, setHome] = useState([
        {text: 'whatApp'    , id: '1' },
        {text: 'purposeApp' , id: '2' },
        {text: 'devApp'     , id: '3' },
        {text: 'fnri'       , id: '4' },
        {text: 'ggg'        , id: '5' },
        {text: 'nutrifact'  , id: '6' },
    ]);
    
    const [visible, setVisible] = useState (false);
    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <>
            {img != null ? null : (
                <TouchableOpacity style={[styles.container, {backgroundColor: color}]}  onPress={toggleOverlay} >
                    <View style={styles.secondContainer}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Icon name="chevron-right" style={styles.icon} size={25} />
                        </View>
                    </View>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                            Go foods, as the name suggests, are foods that make the body “Go” or help it function more efficiently and actively. They primarily focus on carbohydrates, sugar, and fat-rich foods.
                            Go foods play an important role in providing fuel to maintain healthy brain function as well as give energy to different systems in the body.
                            {'\n\n'}
                            Grow foods are protein-rich foods that help the body to develop, grow stronger, and healthier. The proteins your body absorbs from Grow foods is an essential nutrient. Proteins are as the building blocks of life as they build and repair cells and tissues, and make hormones, enzymes, and antibodies.
                            Grow foods in your diet will help your body to build stronger and healthier bones, muscles, teeth, and blood. The grow foods not only make you taller and vigorous, but it also improves your brain health by increasing your alertness.
                            {'\n\n'}
                            Glow foods are abundant in minerals and vitamins that help strengthen the immune system so it can efficiently fight off viruses, infections, and diseases. These vitamins and minerals also aid in the faster healing of wounds, repair of damaged cells, as well as to keep glowing skin, shiny hair, bright eyes, and healthy nails.
                            </Text>
                        </View>
                     </Overlay>
                </TouchableOpacity>
            )}
            
            {img == null ? null : (
            <View style={[styles.imgContainer, {backgroundColor: color}, imgContainerStyle]}>
                <Image source={img} style={[styles.image, imgStyle]} resizeMode={'center'} />
            </View>
            )}
        </>
    )
}

export function Nutrifact({ text, color, img, imgStyle, imgContainerStyle, }){

    const [home, setHome] = useState([
        {text: 'whatApp'    , id: '1' },
        {text: 'purposeApp' , id: '2' },
        {text: 'devApp'     , id: '3' },
        {text: 'fnri'       , id: '4' },
        {text: 'ggg'        , id: '5' },
        {text: 'nutrifact'  , id: '6' },
    ]);
    
    const [visible, setVisible] = useState (false);
    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <>
            {img != null ? null : (
                <TouchableOpacity style={[styles.container, {backgroundColor: color}]}  onPress={toggleOverlay} >
                    <View style={styles.secondContainer}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Icon name="chevron-right" style={styles.icon} size={25} />
                        </View>
                    </View>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                            The Nutritional Facts portions are found at the back of food labels. It provides consumers easy-to-use nutrition information guide as follows:
                            {"\n\n"}
                            - The serving size in both household and metric measures, which shows the amount of product the people actually eat.
                            {"\n"}
                            - The amount of calories from the product is also shown.
                            {"\n"}
                            - The amounts of nutrients and their % Daily Values (% DV) important to the health of today's consumers are also listed. The % DV shows how food fits into overall daily needs. For instance, if the percent daily value of food for fat is 25%, the remaining 75% can be obtained from other foods eaten throughout the day. These are reference amounts set by the government for daily intakes.
                            {"\n"}
                            - The label also tells the number of calories per gram of fat, carbohydrates, and protein.
                            </Text>
                        </View>
                     </Overlay>
                </TouchableOpacity>
            )}
            
            {img == null ? null : (
            <View style={[styles.imgContainer, {backgroundColor: color}, imgContainerStyle]}>
                <Image source={img} style={[styles.image, imgStyle]} resizeMode={'center'} />
            </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.pink,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray_shade_1
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
        marginTop: 10,
        borderRadius: 30,
        backgroundColor: colors.pink,
    },
    title: {
        //fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        textAlign: 'center',
        color: colors.primary_black,
    },
    icon: {
        color: colors.primary_white,
    },
    imgContainer: {
        height: Dimensions.get('window').height * 0.15,
        width: Dimensions.get('window').width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray_shade_1
    },
    image: {
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.25,
    },
});