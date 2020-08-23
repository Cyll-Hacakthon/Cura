import React from 'react';
import {View, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Style from './SplashScreen.style';

declare const global: {HermesInternal: null | {}};

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={['#2EF442', '#09835E']}
      style={Style.linearGradient}>
      <View style={Style.container}>
        <Logo />
      </View>
    </LinearGradient>
  );
};

const Logo = () => {
  return (
    <>
      <View style={Style.container}>
        <Text style={Style.title}>Cura</Text>
        <Text style={Style.subtitle}>We Care</Text>
      </View>
    </>
  );
};

export default SplashScreen;
