/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
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

import SplashScreen from './components/SplashScreen/SplashScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ForumScreen from './components/ForumScreen/ForumScreen';
import SettingScreen from './components/SettingScreen/SettingScreen';
import TakeNumberScreen from './components/takeNumberScreen/TakeNumberScreen';

import ENavigation from './components/NavBar/NavEnum';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [TimeFinishLoad, setTimeFinishLoad] = useState(false);
  const [screen, setScreen] = useState<ENavigation>(ENavigation.HOME);

  useEffect(() => {
    setTimeout(() => {
      setTimeFinishLoad(true);
    }, 3000);
  }, []);

  let [fontsLoaded] = useFonts(customFont);

  if (fontsLoaded && !TimeFinishLoad) {
    return <SplashScreen />;
  } else {
    switch (screen) {
      case ENavigation.HOME:
        return <HomeScreen handleNavigation={setScreen} />;
      case ENavigation.FORUM:
        return <ForumScreen />;
      case ENavigation.TAKE_NUMBER:
        return <TakeNumberScreen />;
      case ENavigation.SETTING:
        return <SettingScreen />;
    }
  }
};

export default App;
