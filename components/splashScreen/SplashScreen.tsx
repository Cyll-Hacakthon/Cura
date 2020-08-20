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

declare const global: {HermesInternal: null | {}};

const SplashScreen = () => {
  return (
    <>
      <View style={curaStyle.container}>
        <Logo />
      </View>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <View style={curaStyle.container}>
        <Text style={curaStyle.title}>Cura</Text>
        <Text style={curaStyle.subtitle}>We Care</Text>
      </View>
    </>
  );
};

const curaStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09835E',
  },
  title: {
    fontSize: 80,
    fontFamily: 'Rubik',
    color: Colors.white,
  },
  subtitle: {
    fontSize: 20,
    color: Colors.white,
  },
});

export default SplashScreen;
