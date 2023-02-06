import React, { useEffect, useRef, useState, useContext, useCallback } from "react";
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
                    "Cherry", "Chicharon", "Chicken Adobo", "Chicken Wings", "Crispy Pata", "Egg", "Fried Rice", "Grapes", 
                    "Halo Halo", "Kaldereta", "Kiwi", "Laing", "Leche Flan", "Lemon", "Liempo", "Longganisa", "Lumpia",
                    "Mango", "Orange", "Pancit", "Pandesal", "Papaya", "Pear", "Pinakbet", "Pineapple", "Pork", "Adobo",
                    "Pork Afritada", "Rambutan", "Rice", "Sisig", "Tinola", "Turon"]

const names =   [
                'Initializing the model...', 'Processing image...', 'Detecting foods...', 'Getting predictions...', 'Converting image input...', 'Calculating detection scores...',
                'Initializing labels...'
                ]
                
export default function Cam(){
    const [ hasCameraPermission, setHasCameraPermission ] = useState(null);
    const [ hasMediaLibraryPermission, setHasMediaLibraryPermission ] = useState();
    const [ image, setImage ] = useState(null);
    const [ type, setType ] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null);
    const [ isPredicting, setIsPredicting ] = useState(false);
    const [ loadingTexts, setLoadingText ] = useState("");

    const [ bbox1, setbbox1] = useState();
    const [ bbox2, setbbox2] = useState();
    const [ bbox3, setbbox3] = useState();
    const [ bbox4, setbbox4] = useState();
    const [ label, setlabel] = useState();
    const [ score, setscore] = useState();

    // globalcontexts
    const { predictedResult, setPredictedResult } = useContext(Context);

    const ref = useRef(null);
    const imgRef = useRef(null);
    const activityRef = useRef(null);
    const navigation = useNavigation();
    
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setLoadingText(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    
    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const MediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMediaLibraryPermission(MediaLibraryPermission.status === "granted");
        })();
    }, []);
    let ctx;
    useEffect(() => {
    if (ref.current) {
        ref.current.width = Dimensions.get('window').width;
        ref.current.height = Dimensions.get('window').height * 0.7;
        ctx = ref.current.getContext('2d');
        addrect();
        }
    },);

    useEffect(() => {
        console.log("Predicting? ", isPredicting);
        if (isPredicting) {
            predictingImage();
        }
    }, [isPredicting]);

    function addrect(){
        
        for(let i=0;i<Object.keys(predictedResult).length;i++){
            ctx.strokeStyle = colors.green_shade_1;
            ctx.lineWidth = 4;
            ctx.strokeRect(predictedResult[i].bbox[0],predictedResult[i].bbox[1],predictedResult[i].bbox[2], predictedResult[i].bbox[3]);
            ctx.font = "20px Verdana";
            ctx.fillText(predictedResult[i].label + " " + Math.round(predictedResult[i].score*100) +"%", predictedResult[i].bbox[0], predictedResult[i].bbox[1]);
        }
    }

    function predictingImage (){
        return (
        <View style={styles.predictingImage}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.predictingText}>Predicting...</Text>
        </View>
        );
    }

    useEffect(() => {
        setIsPredicting(false);
        console.log("Predicting? ", isPredicting);
    }, [predictedResult]);

    if (hasCameraPermission === undefined) {
        return <Text>No access to camera</Text>
    } else if (!hasCameraPermission) {
        return <Text>No permission granted to camera</Text>
    }

    const takePicture = async () => {
        if(cameraRef){
            const data = await cameraRef.current.takePictureAsync({
                base64: true,
            });
            //console.log("Taken image is: (64) ", data.base64);
            setImage(data.uri)
            setIsPredicting(true);
            processImagePrediction(data);
            setLoadingText("Loading");
        }
    }

    const saveImage = async ( ) => {
        console.log("Saving image...")
        console.log("Image is: ", image)
        if(image){
            try{
                await MediaLibrary.createAssetAsync(image);
                alert("Picture saved!🎉")
                console.log("Picture saved!🎉");
                //setImage(null);
            } catch(e){
                console.log(e);
            }
        }
        console.log("Done trying saving image...")
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
            //setLoadingText('Detecting foods...');
            setIsPredicting(true);
            await processImagePrediction(result.assets[0]);
        } else {
            console.log("Image selection cancelled")
        }
        setIsPredicting(false);
    }

    const processImagePrediction = async (base64Image) => {
        console.log('loading model');
        const model = await getModel();
        console.log('End of loading');
        //const croppedData = await cropPicture(base64Image);
        console.log("Converting image...");
        setImage(base64Image.uri);
        const tensor = convertBase64ToTensor(base64Image.base64);
        //setLoadingText('Model start to predict image...');
        const output = model.executeAsync(tensor._z).then((output) => {
             const boxes = output[5].arraySync();
             const scores = output[3].arraySync();
             const classes = output[0].dataSync();
             console.log('Boxes-y: ',boxes[0][0][0] * Dimensions.get('window').height * 0.7);
             console.log('Boxes-x: ',boxes[0][0][1] * Dimensions.get('window').width);
             console.log('Boxes-width: ',boxes[0][0][2] * Dimensions.get('window').height * 0.7 - boxes[0][0][0] * Dimensions.get('window').height * 0.7 );
            console.log('Boxes-height: ',boxes[0][0][3] * Dimensions.get('window').width - boxes[0][0][1] * Dimensions.get('window').width);
             console.log('scores: ',scores[0][0]);
             console.log('Classes: ',classes[0]);
            // console.log(Dimensions.get('window').width);
            // console.log(Dimensions.get('window').height * 0.7);
            console.log("Rendering output...");
            renderPredictions(output);
            // predictedResult.forEach((prediction, i) => {
            //     setQuery((query) => [...query, prediction[i].label]);
            // });
        });
    }

    const renderPredictions = (output) => {
        const boxes = output[5].arraySync();
        const scores = output[3].arraySync();
        const classes = output[0].dataSync();
        const threshold = 0.5;
        const detections = buildDetectedObjects(scores, threshold, boxes, classes, FOOD_CLASSES);
        setPredictedResult(detections);
        console.log("Detections: ", detections);
    }

    function buildDetectedObjects(scores, threshold, boxes, classes, FOOD_CLASSES) {
        const detectionObjects = [];
        
        scores[0].forEach((score, i) => {
          if (score > threshold) {
            const bbox = [];
            const minY = boxes[0][i][0] * Dimensions.get('window').height * 0.7;
            const minX = boxes[0][i][1] * Dimensions.get('window').width;
            const maxY = boxes[0][i][2] * Dimensions.get('window').height * 0.7;
            const maxX = boxes[0][i][3] * Dimensions.get('window').width;;
            bbox[0] = minX;
            bbox[1] = minY;
            bbox[2] = maxX - minX;
            bbox[3] = maxY - minY;
            setbbox1(bbox[0]);
            setbbox2(bbox[1]);
            setbbox3(bbox[2]);
            setbbox4(bbox[3]);
            setlabel(FOOD_CLASSES[classes[i] - 1]);
            setscore(score.toFixed(4));

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
 

      function reset () {
        setImage(null);
        setlabel(null);
      }

    return (
        <View style={styles.screen}>
        <StatusBar style="light" />
            {!isPredicting && !image ?
            <Camera
                style={styles.camera}
                type={type}
                ref={cameraRef}
                autoFocus={true}
            >
                <View style={styles.cameraButtonsContainer}>
                    
                    <TouchableOpacity onPress={() => {
                        selectImage();
                        setIsPredicting(true);
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
            isPredicting ?
            <ImageBackground source={require('../../assets/images/loadings.jpg')} resizeMode='cover' style={[styles.container]}>
                <ActivityIndicator size="large" style={{backgroundColor: '#000000c0', height:75 , width:75, borderRadius:10,}} visible={isPredicting} color="#00ff00" />
                <Text style={[styles.loadingText]}>{loadingTexts}</Text>
            </ImageBackground> :
            //isPredicting ? <ActivityIndicator size="large" visible={isPredicting} color={colors.primary_white} /> :
            //<Canvas style={styles.canvas} ref={handleCanvas} ></Canvas>
            //bale dito ang goal, gumawa ng container tapos ilagay don yung image sa loob or gawing background
            //tapos lalagyan mo ng canvas na dapat same height and width don sa ng image
            //parang ipapatong yun canvas sa image, dapat pantay na pantay para makuha yung tamang coordinates nung box
            //kukunin yung height at width nung contianer or image tas imumultiply sa output ng model na coordinates para sakto sa object yung box
            //may useeffect hook sa taas para dun sa mga value nung box tas design, kinacopy ko muna yung value sa console log x, y width height kasi wala pa function nag magpapasa ng value
            //<Canvas style={styles.canvas} ref={ref} ></Canvas>
            <View styles = {styles.camera}>
                <ImageBackground source={{uri : image}} style={styles.camera} ref={imgRef} >
                    <Canvas style={styles.canvas} ref={ref} ></Canvas>
                </ImageBackground>
            </View>
            )}
            {
                !image ?
                <View style={styles.resultContainer}>
                    <Text style={{fontWeight: 'bold', color: colors.primary_white, fontSize: 20}}>Capture to start scanning</Text>
                </View>
                : 
                <View style={styles.cameraButtonsContainer}>
                        <TouchableOpacity onPress={()=> reset() }>
                            <MaterialCommunityIcons name="camera-retake" size={60} color={colors.red_shade_2} /> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveImage}>
                            <MaterialCommunityIcons name="check-circle-outline" size={60} 
                            color={colors.green_shade_2}/> 
                        </TouchableOpacity>
                </View>
            }
            
            {/* <NavigationBar /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.primary_black,
        alignItems: 'center',
    },
    camera : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        justifyContent: 'flex-end',
    },
    resultContainer : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.13,
        backgroundColor: colors.primary_black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FFFFFF',
        marginTop: 50,
        textAlign: 'center',
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
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.92,
    },
});