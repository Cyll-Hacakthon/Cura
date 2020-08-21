import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {CuraColor} from '../../util';
import Navbar from '../NavBar/NavBar';

const HomeScreen = () => {
  return (
    <>
      <View style={curaStyle.container}>
        <View style={curaStyle.content}>
          <Text>Home Page</Text>
        </View>
        <View style={curaStyle.navbar}>
          <Navbar />
        </View>
      </View>
    </>
  );
};

const curaStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CuraColor.DarkGreen,
    color: CuraColor.White,
  },
  navbar: {
    flex: 0.1,
  },
  content: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    color: CuraColor.White,
  },
});

export default HomeScreen;
