import Font from 'expo-font';
import Expo from 'expo';

export const CuraColor = {
  DarkGreen: '#09835E',
  Green: '#2EF442',
};

export const customFont = {
  Rubik: require('../assets/fonts/Rubik-Regular.ttf'),
};

export const loadCustomFonts = async () => {
  try {
    await Font.loadAsync(customFont);
  } catch (error) {
    console.log(error);
  }
};
