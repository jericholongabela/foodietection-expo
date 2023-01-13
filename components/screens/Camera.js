import React, { useEffect, useRef, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

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
import { SafeAreaView } from 'react-native';
import Canvas from 'react-native-canvas';


const FOOD_CLASSES = ["Apple", "Arroz Caldo", "Avocado", "Balut", "Banana", "Bicol Express", "Bulalo", "Champorado",
                    "Cherry", "Chicharon", "Chicken Adobo", "Chicken Wings", "Crispy Pata", "Fried Rice", "Grapes", 
                    "Halo Halo", "Kaldereta", "Kiwi", "Laing", "Leche Flan", "Lemon", "Liempo", "Longganisa", "Lumpia",
                    "Mango", "Orange", "Pancit", "Pandesal", "Papaya", "Pear", "Pinakbet", "Pineapple", "Pork", "Adobo",
                    "Pork Afritada", "Rambutan", "Sisig", "Tinolang Manok", "Turon"]

export default function Cam(){
    const [ hasCameraPermission, setHasCameraPermission ] = useState(null);
    const [ hasMediaLibraryPermission, setHasMediaLibraryPermission ] = useState();
    const [ image, setImage ] = useState(null);
    const [ imagess, setImagess ] = useState(null);
    const [ type, setType ] = useState(Camera.Constants.Type.back);
    const [ mobilenetv3, setMobilenetv3 ] = useState();
    const cameraRef = useRef(null);
    const [ isPredicting, setIsPredicting ] = useState(false);

    // globalcontexts
    const { loadingModel, setLoadingModel } = useContext(Context);
    const { predictedResult, setPredictedResult } = useContext(Context);

    const ref = useRef(null);
    const imgRef = useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const MediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMediaLibraryPermission(MediaLibraryPermission.status === "granted");
        })();
    }, []);

  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.getContext('2d');
      ctx.strokeStyle = "black";
      Canvas.width = 500;
      Canvas.height = 400;
      ctx.lineWidth = 4;
      ctx.strokeRect(10,10, 100,100);
      ctx.strokeRect(70,90, 100,100);
    }
  }, [ref]);


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
        navigation.navigate("Meal Information");
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
        //const croppedData = await cropPicture(base64Image);
        setImage(base64Image.uri);
        const tensor = convertBase64ToTensor(base64Image.base64);
        const output = model.executeAsync(tensor._z).then((output) => {
             const boxes = output[1].arraySync();
             const scores = output[5].arraySync();
             const classes = output[3].dataSync();
             console.log('Boxes-y: ',boxes[0][0][0] * Dimensions.get('window').height * 0.7);
             console.log('Boxes-x: ',boxes[0][0][1] * Dimensions.get('window').width);
             console.log('Boxes-width: ',boxes[0][0][2] * Dimensions.get('window').height * 0.7 - boxes[0][0][0] * Dimensions.get('window').height * 0.7 );
            // console.log('Boxes-height: ',boxes[0][0][3] * Dimensions.get('window').width - boxes[0][0][1] * Dimensions.get('window').width);
            // console.log('scores: ',scores[0][0]);
            // console.log('Classes: ',classes[0]);
            // console.log(Dimensions.get('window').width);
            // console.log(Dimensions.get('window').height * 0.7);
            renderPredictions(output);
            predictedResult.forEach((prediction, i) => {
                setQuery((query) => [...query, prediction[i].label]);
            });
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

    const renderPredictions = (output) => {
        const boxes = output[1].arraySync();
        const scores = output[5].arraySync();
        const classes = output[3].dataSync();
        const threshold = 0.5;
        const detections = buildDetectedObjects(scores, threshold, boxes, classes, FOOD_CLASSES);

        setPredictedResult(detections);
        console.log("Detections: ", detections);
    }

    function buildDetectedObjects(scores, threshold, boxes, classes, FOOD_CLASSES) {
        const detectionObjects = [];
    
        scores[0].forEach((score, i) => {
            console.log('counter: ', score);
          if (score > threshold) {
            const bbox = [];
            // const minY = boxes[0][i][0] * imgRef.offsetTop;
            // const minX = boxes[0][i][1] * imgRef.offsetLeft;
            const minY = boxes[0][i][0];
            const minX = boxes[0][i][1];
            const maxY = boxes[0][i][2];
            const maxX = boxes[0][i][3];
            bbox[0] = minX;
            bbox[1] = minY;
            bbox[2] = maxX - minX;
            bbox[3] = maxY - minY;
            detectionObjects.push({
              class: classes[i],
              label: FOOD_CLASSES[classes[i] - 1],
              score: score.toFixed(4),
              bbox: bbox
            })
          }
        })
        return detectionObjects
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
            //bale dito ang goal, gumawa ng container tapos ilagay don yung image sa loob or gawing background
            //tapos lalagyan mo ng canvas na dapat same height and width don sa ng image
            //parang ipapatong yun canvas sa image, dapat pantay na pantay para makuha yung tamang coordinates nung box
            //kukunin yung height at width nung contianer or image tas imumultiply sa output ng model na coordinates para sakto sa object yung box
            //may useeffect hook sa taas para dun sa mga value nung box tas design, kinacopy ko muna yung value sa console log x, y width height kasi wala pa function nag magpapasa ng value
            <View styles = {styles.camera}>
                <ImageBackground source={{uri : image}} style={styles.camera} ref={imgRef} >
                <Canvas style={styles.canvas} ref={ref} ></Canvas>
                </ImageBackground>
            </View>
            )}
            <View style={styles.resultContainer}>
                <View style={styles.cameraButtonsContainer}>
                    <TouchableOpacity onPress={()=>setImage(null)}>
                        <MaterialCommunityIcons name="camera-retake" size={60} color={colors.red_shade_2} /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={saveImage}>
                        <MaterialCommunityIcons name="check-circle-outline" size={60} 
                        color={colors.green_shade_2}/> 
                    </TouchableOpacity>
                </View>
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
    image : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
    },
    canvas: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
    },
});