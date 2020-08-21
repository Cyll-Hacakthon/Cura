import React from 'react';
import ENavigation from './NavEnum';
import Style from './NavBar.style';
import {View, Text, TouchableOpacity} from 'react-native';

interface IProp {
  active?: ENavigation;
  setScreen: Function;
}

const NavBar = (props: IProp) => {
  const navigate = (page: ENavigation) => {
    return () => {
      props.setScreen(page);
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
