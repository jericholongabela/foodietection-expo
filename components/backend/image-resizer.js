import {Dimensions} from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';

const {height: DEVICE_HEIGHT, width: DEVICE_WIDTH} = Dimensions.get('screen');

// got the dimension from the trained data of the *Teachable Machine*; pixel resolution conversion (8x)
export const BITMAP_DIMENSION = 285;

export const cropPicture = async (imageData) => {
  try {
    const { uri } = imageData;
    const actions = [
      // {
      //   crop: {
      //     originX: width / 2 - cropWidth / 2,
      //     originY: height / 2 - cropHeight / 2,
      //     width: cropWidth,
      //     height: cropHeight,
      //   },
      // },
      {
        resize: {
          width: BITMAP_DIMENSION,
          height: BITMAP_DIMENSION,
        },
      },
    ];
    const saveOptions = {
      compress: 1,
      format: ImageManipulator.SaveFormat.JPEG,
      base64: true,
    };
    return await ImageManipulator.manipulateAsync(uri, actions, saveOptions);
  } catch (error) {
    console.log('Could not crop & resize photo', error);
  }
};