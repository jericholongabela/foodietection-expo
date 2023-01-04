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
                        <Text style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum in magna a suscipit. 
                                Aenean eget laoreet ipsum. Aenean a lacinia lorem. Donec mattis, dolor eu rhoncus semper, nisl justo pharetra turpis, et luctus ipsum turpis eleifend elit. 
                            </Text>
                        </Text>
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
                        <Text style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                1
                            </Text>
                            <Text>

                            </Text>
                        </Text>
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
                        <Text style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                2
                            </Text>
                            <Text>

                            </Text>
                        </Text>
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
                        <Text style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                3
                            </Text>
                            <Text>

                            </Text>
                        </Text>
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
                        <Text style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                4
                            </Text>
                            <Text>

                            </Text>
                        </Text>
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
                        <Text style={overlayStyles.overlay}> 
                            <Text style={overlayStyles.textStyle}>
                                5
                            </Text>
                            <Text>

                            </Text>
                        </Text>
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