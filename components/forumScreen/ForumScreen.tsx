import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CuraColor, customFont} from '../../util';
import Navbar from '../NavBar/NavBar';
import Style from './ForumScreen.style';

interface IProps {
  handleNavigation: Function;
}

const ForumScreen = (props: IProps) => {
  return (
    <>
      <View style={Style.container}>
        <Text>Forum Page</Text>
        <View style={Style.navbar}>
          <Navbar handleNavigation={props.handleNavigation} />
        </View>
      </View>
    </>
  );
};

export default ForumScreen;
