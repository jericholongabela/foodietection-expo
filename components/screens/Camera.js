import React, { useEffect, useRef, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';

import colors from "../../assets/styles/colors";
import NavigationBar from "../modules/NavigationBar";
import { Context } from "../global_context/GlobalContext";
import { getModel, convertBase64ToTensor, startPrediction } from "../backend/model";
import { cropPicture } from "../backend/image-resizer";

const FOOD_CLASSES = ["Apple", "Arroz Caldo", "Avocado", "Balut", "Banana", "Bicol Express", "Bulalo", "Champorado",
                    "Cherry", "Chicharon", "Chicken Adobo", "Chicken Wings", "Crispy Pata", "Fried Rice", "Grapes", 
                    "Halo Halo", "Kaldereta", "Kiwi", "Laing", "Leche Flan", "Lemon", "Liempo", "Longganisa", "Lumpia",
                    "Mango", "Orange", "Pancit", "Pandesal", "Papaya", "Pear", "Pinakbet", "Pineapple", "Pork", "Adobo",
                    "Pork Afritada", "Rambutan", "Sisig", "Tinolang Manok", "Turon"]

export default function Cam(){
    const [ hasCameraPermission, setHasCameraPermission ] = useState(null);
    const [ hasMediaLibraryPermission, setHasMediaLibraryPermission ] = useState();
    const [ image, setImage ] = useState(null);
    const [ type, setType ] = useState(Camera.Constants.Type.back);
    const [ mobilenetv3, setMobilenetv3 ] = useState();
    const cameraRef = useRef(null);
    const { loadingModel, setLoadingModel } = useContext(Context);
    const [ isPredicting, setIsPredicting ] = useState(false);

    const [ predictedResult, setPredictedResult ] = useState("");

    // for loading the model
    const modelJson = require('../../assets/model/model.json');
    const modelWeights = require('../../assets/model/mobilenetv3.bin');

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
            const data = await cameraRef.current.takePictureAsync({
                based64: true,
            });
            console.log("Taken image is: ", data);
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
            base64: true,
            quality: 1,
        });

        if (!result.canceled && result!=null) {
            setIsPredicting(true);
            console.log("Is Predicting? ", isPredicting);
            await processImagePrediction(result.assets[0]);
            setIsPredicting(false);
            console.log("Is Predicting? ", isPredicting);
        } else {
            console.log("Image selection cancelled")
        }
    }

    const processImagePrediction = async (base64Image) => {
        const model = await getModel();
        const croppedData = await cropPicture(base64Image);
        setImage(croppedData.uri);
        const tensor = convertBase64ToTensor(croppedData.base64);
        console.log(tensor);
        console.log("Tensor z is: ", tensor._z);
        const output = model.executeAsync(tensor._z).then((output) => {
            console.log("Output is ", output);
            console.log("Class is : ", output[6].arraySync());
        });
        

        // model.detect(tensor).then((predictions) => {
        //     // Drawing the rectangles

        // }).catch((Error) => {
        //     console.log(Error);
        // });

        // setIsPredicting(true);
        // const prediction = await startPrediction(model, tensor);
        // setIsPredicting(false);
        // const highestProbability = prediction.indexOf(Math.max.apply(null, prediction));
        // setPredictedResult(FOOD_CLASSES[highestProbability]);
        // console.log(predictedResult);
        //requestAnimationFrame(processImagePrediction);
    }

    function drawBoundingBox(prediction, image){

    }

    return (
        <View style={styles.screen}>
            <StatusBar style="light" />
            {!image ?
            <Camera
                style={styles.camera}
                type={type}
                ref={cameraRef}
                autoFocus={true}
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
            loadingModel || isPredicting ? <ActivityIndicator size="large" color={colors.primary_white} /> :
            //<Canvas style={styles.canvas} ref={handleCanvas} ></Canvas>
            <ImageBackground source={{uri : image}} style={styles.camera} resizeMode="contain" >
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
    canvas: {
        
    },
});