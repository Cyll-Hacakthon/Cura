import {StyleSheet} from 'react-native';

export const CuraColor = {
  DarkGreen: '#09835E',
  LightGreen: '#2EF442',
  Green: '#00E05A',
  White: '#FFFFFF',
};

export const customFont = {
  Rubik: require('../assets/fonts/Rubik-Regular.ttf'),
  RubikLight: require('../assets/fonts/Rubik-Light.ttf'),
  RubikBold: require('../assets/fonts/Rubik-Bold.ttf'),
  Feather: require('react-native-vector-icons/Fonts/Feather.ttf'),
};

export const Font = StyleSheet.create({
  LeadSmall: {
    fontFamily: 'RubikLight',
    fontSize: 15,
  },
  Bold: {
    fontFamily: 'RubikBold',
    fontWeight: '500',
  },
  Heading1: {
    fontFamily: 'Rubik',
    fontSize: 45,
    lineHeight: 53,
  },
  Heading3: {
    fontFamily: 'Rubik',
    fontSize: 31,
    lineHeight: 39,
  },
  Heading6: {
    fontFamily: 'RubikLight',
    fontSize: 15,
    lineHeight: 21,
  },
});

export type RootStackParamList = {
  HomeScreen: undefined;
  ForumScreen: undefined;
  TakeNumberScreen: undefined;
  SettingScreen: undefined;
};
