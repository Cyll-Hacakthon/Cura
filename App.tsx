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

//Redux Store
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

//Firebase
import firebase from './util/firebase';
import {createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

declare const global: {HermesInternal: null | {}};

//Store Creation
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);

// React Redux Firebase Config
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AppNavigator = () => {
  const [screen, setScreen] = useState<ENavigation>(ENavigation.FORUM);
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
};

const App = () => {
  const [loadFont] = useFonts(customFont);
  const [TimeFinishLoad, setTimeFinishLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeFinishLoad(true);
    }, 3000);
  }, []);

  if (loadFont) {
    if (!TimeFinishLoad) {
      return <SplashScreen />;
    } else {
      return (
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <AppNavigator />
          </ReactReduxFirebaseProvider>
        </Provider>
      );
    }
  } else {
    return <AppLoading />;
  }
};

export default App;
