/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {customFont} from './util';
import {useFonts} from 'expo-font';

import SplashScreen from './components/splashScreen/SplashScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  let [fontsLoaded] = useFonts(customFont);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading Wait sia</Text>
      </View>
    );
  } else {
    return (
      <>
        <SplashScreen />
      </>
    );
  }
};

export default App;
