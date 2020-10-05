import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from './SettingScreen.style';
import {Feather} from '@expo/vector-icons';

const userImage = require('../../assets/images/gitlab-logo.png');

const SettingScreen = () => {
  const TopBox = () => {
    return (
      <View style={Style.topBox}>
        <View style={Style.profileBox}>
          <Image style={Style.userImage} source={userImage} />
          <View style={Style.wordBox}>
            <Text style={Style.nameText}>Wendy Moe</Text>
            <Text style={Style.mailText}>WendyNo5@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View>
        <TopBox />
        <View style={Style.optionSelectionBox}>
          <View style={Style.mainButtonBox}>
            <View>
              <View style={Style.mainButton}>
                <Feather name="message-square" size={35} color="#ffffff" />
              </View>
              <Text style={Style.mainButtonTitle}>Question</Text>
            </View>
            <View>
              <View style={Style.mainButton}>
                <Feather name="users" size={35} color="#ffffff" />
              </View>
              <Text style={Style.mainButtonTitle}>Follow-Up</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SettingScreen;
