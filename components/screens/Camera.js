import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../assets/styles/colors";
import NavigationBar from "../modules/NavigationBar";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cam(){
    const [ hasCameraPermission, setHasCameraPermission ] = useState(null);
    const [ hasMediaLibraryPermission, setHasMediaLibraryPermission ] = useState();
    const [ image, setImage ] = useState(null);
    const [ type, setType ] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const MediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMediaLibraryPermission(MediaLibraryPermission.status === "granted");
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>No access to camera</Text>
    } else if (!hasCameraPermission) {
        return <Text>No permission granted to camera</Text>
    }

    const takePicture = async () => {
        if(cameraRef){
            const data = await cameraRef.current.takePictureAsync();
            setImage(data.uri);
            console.log(data.uri);
        }
    }

    const saveImage = async () => {
        if(image){
            try{
                await MediaLibrary.createAssetAsync(image);
                alert("Picture saved!🎉")
                setImage(null);
            } catch(e){
                console.log(e);
            }
        }
    }

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        } else {
            console.log("Image selection cancelled")
        }
    }

    return (
        <View style={styles.screen}>
            <StatusBar style="light" />
            {!image ?
            <Camera
                style={styles.camera}
                type={type}
                ref={cameraRef}
            >
                <View style={styles.cameraButtonsContainer}>
                    <TouchableOpacity onPress={() => {
                        selectImage();
                    }}>
                        <MaterialCommunityIcons name="image" size={30} color={colors.primary_white} /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takePicture}>
                        <MaterialCommunityIcons name="camera-iris" size={60} color={colors.primary_white} /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                        )
                    }}>
                        <MaterialCommunityIcons name="camera-flip" size={30} color={colors.primary_white} /> 
                    </TouchableOpacity>
                </View>
            </Camera>
            :
            (
            <ImageBackground source={{uri : image}} style={styles.camera} >
                <View style={styles.cameraButtonsContainer}>
                    <TouchableOpacity onPress={()=>setImage(null)}>
                        <MaterialCommunityIcons name="camera-retake" size={60} color={colors.red_shade_2} /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={saveImage}>
                        <MaterialCommunityIcons name="check-circle-outline" size={60} color={colors.green_shade_2} /> 
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            )
            }
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Capture to scan</Text>
            </View>
            <NavigationBar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.primary_white,
        alignItems: 'center',
    },
    camera : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        justifyContent: 'flex-end',
    },
    resultContainer : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.15,
        backgroundColor: colors.primary_black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.primary_white,
    },
    cameraButtonsContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});