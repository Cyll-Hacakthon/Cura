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

import SplashScreen from './components/splashScreen/SplashScreen';
import HomeScreen from './components/homeScreen/HomeScreen';
import ForumScreen from './components/forumScreen/ForumScreen';
import SettingScreen from './components/settingScreen/SettingScreen';
import TakeNumberScreen from './components/takeNumberScreen/TakeNumberScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [TimeFinishLoad, setTimeFinishLoad] = useState(false);
  const [screen, setScreen] = useState('Forum');

  useEffect(() => {
    setTimeout(() => {
      setTimeFinishLoad(true);
    }, 3000);
  }, []);

  let [fontsLoaded] = useFonts(customFont);

  const handleNavigate = (screen: string) => {
    setScreen(screen);
  };

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading Wait sia</Text>
      </View>
    );
  } else {
    {
      if (!TimeFinishLoad) {
        return <SplashScreen />;
      } else {
        switch (screen) {
          case 'Home':
            return <HomeScreen />;
          case 'Forum':
            return <ForumScreen />;
          case 'Take a number':
            return <TakeNumberScreen />;
          case 'Setting':
            return <SettingScreen />;
        }
      }
    }
  }
};

export default App;
