import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CuraColor, customFont} from '../../util';

const TakeNumberScreen = () => {
  return (
    <>
      <View style={curaStyle.container}>
        <Text>Forum Page</Text>
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
});

export default TakeNumberScreen;
