import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CuraColor, customFont} from '../../util';

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
    backgroundColor: CuraColor.DarkGreen,
  },
  title: {
    fontSize: 80,
    color: Colors.white,
    fontFamily: 'Rubik',
  },
  subtitle: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Rubik',
  },
});

export default SplashScreen;
