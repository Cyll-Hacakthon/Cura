import React from 'react';
import {ENavigation} from '../../App';
import Style from './NavBar.style';
import {View, Text} from 'react-native';

interface IProp {
  active?: ENavigation;
}

const NavBar = (prop: IProp) => {
  return (
    <View style={Style.container}>
      <Text>Home</Text>
      <Text>Forum</Text>
      <Text>Take A Number</Text>
      <Text>Setting</Text>
    </View>
  );
};

export default NavBar;
