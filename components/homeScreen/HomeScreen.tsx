import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import Navbar from '../NavBar/NavBar';
import Style from './HomeScreen.style';

const userImage = require('../../assets/images/gitlab-logo.png');

interface IProps {
  handleNavigation: Function;
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

  return (
    <>
      <View style={Style.container}>
        <ScrollView>
          <View style={Style.topBox}>
            <NameBox />
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
