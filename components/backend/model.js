import { useContext } from 'react';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';

import { Base64Binary } from './utils';
import { Context } from '../global_context/GlobalContext';
import { BITMAP_DIMENSION } from './image-resizer';

const modelJson = require('../../assets/model/model.json');
const modelWeights = require('../../assets/model/mobilenetv3.bin');

// 0: channel from JPEG-encoded image
// 1: gray scale
// 3: RGB image
const TENSORFLOW_CHANNEL = 3;

export const getModel = async () => {
    try {
        // wait until tensorflow is ready
        await tf.ready();
        // load the trained model
        return await tf.loadGraphModel("https://raw.githubusercontent.com/maxnuggets/foodietection-expo/main/assets/model-model/jdjljsjs/model.json");
    } catch (error) {
        console.log("Cannot load model. There has been an error: ", error);
    }
};

export const convertBase64ToTensor = async (base64) => {
    try{
        const uIntArray = Base64Binary.decode(base64);
        //decode a jpeg-encoded image to a 3d tensor of dtype
        const decodedImage = decodeJpeg(uIntArray, 3);
        //reshape into a 4d array
        return decodedImage.reshape([1, BITMAP_DIMENSION, BITMAP_DIMENSION, TENSORFLOW_CHANNEL]);
    } catch (error) {
        console.log("Cannot convert base64 to tensor. There has been an error: ", error);
    }
}

export const startPrediction = async (model, tensor) => {
    try{
        //predict against the model
        const output = await model.detect(tensor).then(
            (prediction) => {
                
            }
        );
        //return typed array
        return output.dataSync();
    } catch (error) {
        console.log("Cannot start prediction. There has been an error: ", error);
    }
}