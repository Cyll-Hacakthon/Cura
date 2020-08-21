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

  const NavigateButton = (props: {page: ENavigation}) => {
    return (
      <TouchableOpacity onPress={navigate(props.page)}>
        <Text>{props.page}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Style.container}>
      <NavigateButton page={ENavigation.HOME} />
      <NavigateButton page={ENavigation.FORUM} />
      <NavigateButton page={ENavigation.TAKE_NUMBER} />
      <NavigateButton page={ENavigation.SETTING} />
    </View>
  );
};

export default NavBar;
