import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Navbar from '../NavBar/NavBar';
import Style from './HomeScreen.style';

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
        <View>
          <Text>Test</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={Style.container}>
        <ScrollView style={Style.content}>
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
