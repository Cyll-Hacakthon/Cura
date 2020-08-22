import React from 'react';
import ENavigation from './NavEnum';
import Style from './NavBar.style';
import {View, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface IProp {
  active?: ENavigation;
  handleNavigation: Function;
}

const NavBar = (props: IProp) => {
  const navigate = (page: ENavigation) => {
    return () => {
      props.handleNavigation(page);
    };
  };

  const NavigateButton = (props: {destination: ENavigation}) => {
    return (
      <TouchableOpacity onPress={navigate(props.destination)}>
        <Text>{props.destination}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Style.container}>
      <NavigateButton destination={ENavigation.HOME} />
      <NavigateButton destination={ENavigation.FORUM} />
      <NavigateButton destination={ENavigation.TAKE_NUMBER} />
      <NavigateButton destination={ENavigation.SETTING} />
    </View>
  );
};

export default NavBar;
