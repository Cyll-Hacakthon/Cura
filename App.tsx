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
import 'react-native-gesture-handler';
import {customFont} from './util';
import {AppLoading} from 'expo';
import {useFonts} from 'expo-font';

import SplashScreen from './components/splashScreen/SplashScreen';
import NavContainer from './components/NavContainer/NavContainer';
//import ENavigation from './components/NavBar/NavEnum';

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
            {/* <AppNavigator /> */}
            <NavContainer />
          </ReactReduxFirebaseProvider>
        </Provider>
      );
    }
  } else {
    return <AppLoading />;
  }
};

export default App;
