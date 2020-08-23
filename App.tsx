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
import {customFont} from './util';
import {AppLoading} from 'expo';
import {useFonts} from 'expo-font';

import SplashScreen from './components/splashScreen/SplashScreen';
import HomeScreen from './components/homeScreen/HomeScreen';
import ForumScreen from './components/forumScreen/ForumScreen';
import SettingScreen from './components/settingScreen/SettingScreen';
import TakeNumberScreen from './components/takeNumberScreen/TakeNumberScreen';

import ENavigation from './components/NavBar/NavEnum';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [loadFont] = useFonts(customFont);
  const [TimeFinishLoad, setTimeFinishLoad] = useState(false);
  const [screen, setScreen] = useState<ENavigation>(ENavigation.HOME);

  useEffect(() => {
    setTimeout(() => {
      setTimeFinishLoad(true);
    }, 3000);
  }, []);

  if (loadFont) {
    if (!TimeFinishLoad) {
      return <SplashScreen />;
    } else {
      switch (screen) {
        case ENavigation.HOME:
          return <HomeScreen handleNavigation={setScreen} />;
        case ENavigation.FORUM:
          return <ForumScreen handleNavigation={setScreen} />;
        case ENavigation.TAKE_NUMBER:
          return <TakeNumberScreen />;
        case ENavigation.SETTING:
          return <SettingScreen />;
      }
    }
  } else {
    return <AppLoading />;
  }
};

export default App;
