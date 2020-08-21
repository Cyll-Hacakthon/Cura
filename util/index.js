import Font from 'expo-font';

export const CuraColor = {
  DarkGreen: '#09835E',
  LightGreen: '#2EF442',
  Green: '#00E05A',
  White: '#FFFFFF',
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
