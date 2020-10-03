import React from 'react';
import ENavigation from './NavEnum';
import Style from './NavBar.style';
import {View, Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

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

  const NavigateButton = (props: {
    destination: ENavigation;
    iconType: string;
  }) => {
    return (
      <TouchableOpacity onPress={navigate(props.destination)}>
        <Feather
          name={props.iconType}
          size={24}
          color={'white'}
          style={{textAlign: 'center'}}
        />
        <Text style={Style.navText}>{props.destination}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Style.container}>
      <NavigateButton destination={ENavigation.HOME} iconType="home" />
      <NavigateButton destination={ENavigation.FORUM} iconType="monitor" />
      <NavigateButton
        destination={ENavigation.TAKE_NUMBER}
        iconType="clipboard"
      />
      <NavigateButton destination={ENavigation.SETTING} iconType="settings" />
    </View>
  );
};

export default NavBar;
