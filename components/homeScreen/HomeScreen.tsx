import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

import Navbar from '../NavBar/NavBar';
import Style from './HomeScreen.style';
import {LinearGradient} from 'expo-linear-gradient';
import {Font} from '../../util';
import {MaterialIcons} from '@expo/vector-icons';

const userImage = require('../../assets/images/gitlab-logo.png');

interface IProps {
  handleNavigation: Function;
}

interface IPropsSelect {
  recordType: string;
  iconType: string;
}

const HomeScreen = (props: IProps) => {
  const NameBox = () => {
    return (
      <View style={Style.nameBox}>
        <View>
          <View>
            <Text style={Style.welcomeWord}>Welcome Back,</Text>
          </View>
          <View>
            <Text style={Style.userName}>Wendy Moe</Text>
          </View>
        </View>
        <View style={Style.userImageBox}>
          <Image style={Style.userImage} source={userImage}></Image>
        </View>
      </View>
    );
  };

  const SelectionBox = (props: IPropsSelect) => {
    return (
      <LinearGradient
        colors={['#2EF442', '#41CCA2']}
        style={Style.selectionBox}>
        <TouchableOpacity>
          <Text style={{...Font.Heading3, ...Style.recordTypeText}}>
            {props.recordType}
          </Text>
          <View style={Style.iconContainer}>
            <MaterialIcons name={props.iconType} size={70} color="white" />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  return (
    <>
      <View style={Style.container}>
        <ScrollView>
          <View style={Style.topBox}>
            <NameBox />
          </View>
          <View style={Style.rowContainer}>
            <SelectionBox recordType="Heart Rate" iconType="favorite" />
            <SelectionBox recordType="Exercise Rate" iconType="accessibility" />
          </View>
          <View style={Style.rowContainer}>
            <SelectionBox recordType="Sleep Quality" iconType="brightness-2" />
            <SelectionBox recordType="Stress Level" iconType="poll" />
          </View>
        </ScrollView>
        <View style={Style.navbar}>
          <Navbar handleNavigation={props.handleNavigation} />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
