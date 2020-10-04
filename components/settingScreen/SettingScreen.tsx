import React from 'react';
import {View, Text} from 'react-native';
import Style from './SettingScreen.style';

const SettingScreen = () => {
  return (
    <>
      <View>
        <View style={Style.topBox}>
          <Text>Setting</Text>
        </View>
      </View>
    </>
  );
};

export default SettingScreen;
