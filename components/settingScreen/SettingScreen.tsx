import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './SettingScreen.style';
import {CuraColor} from '../../util';
import {Feather} from '@expo/vector-icons';
import {RootState} from '../../store//reducers/rootReducer';
import {RootStackParamList} from '../Parts/SettingContainer/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

const userImage = require('../../assets/images/userProfileImage.jpg');

type SettingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Setting'
>;

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IOptionButtonBox {
  iconName: string;
  iconColor?: string;
  boxTitle: string;
  children?: React.ReactElement;
  pressAction?: Function;
}

type SettingScreenProps = PropsFromRedux & {
  navigation: SettingScreenNavigationProp;
};

const SettingScreen = ({
  email,
  username,
  logoutUser,
  navigation,
}: SettingScreenProps) => {
  const TopBox = () => {
    return (
      <View style={Style.topBox}>
        <View style={Style.profileBox}>
          <Image style={Style.userImage} source={userImage} />
          <View style={Style.wordBox}>
            <Text style={Style.nameText}>{username}</Text>
            <Text style={Style.mailText}>{email}</Text>
          </View>
        </View>
      </View>
    );
  };

  const MainButtonBox = () => {
    return (
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
    );
  };

  const OptionButtonBox = ({
    iconName,
    iconColor = 'black',
    boxTitle,
    children,
    pressAction,
  }: IOptionButtonBox) => {
    const ArrowIcon = (
      <Feather
        style={Style.iconContainer}
        name="chevron-right"
        color={CuraColor.Green}
        size={25}
      />
    );
    return (
      <TouchableOpacity
        onPress={() => {
          pressAction ? pressAction() : null;
        }}>
        <View style={Style.optionButton}>
          <Feather
            style={Style.iconContainer}
            color={iconColor}
            name={iconName}
            size={20}
          />
          <Text style={Style.wordContainer}>{boxTitle}</Text>
          {children ? children : ArrowIcon}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View>
        <TopBox />
        <View style={Style.optionSelectionBox}>
          <MainButtonBox />
          <OptionButtonBox
            iconName="user"
            boxTitle="Personal Information"
            pressAction={() => {
              navigation.navigate('Personal Info');
            }}
          />
          <OptionButtonBox
            iconName="list"
            boxTitle="Healthcare Records"
            pressAction={() => {
              navigation.navigate('Medical Reports');
            }}
          />
          <OptionButtonBox
            iconName="database"
            boxTitle="Data Management"
            pressAction={() => {
              navigation.navigate('Data Management');
            }}
          />
          <OptionButtonBox
            iconName="x-square"
            iconColor="red"
            boxTitle="Logout"
            pressAction={() => {
              logoutUser();
            }}
          />
        </View>
      </View>
    </>
  );
};

const mapState = (state: RootState) => {
  return {username: state.user.name, email: state.user.email};
};

const mapDispatch = {
  logoutUser: () => ({
    type: 'LOGOUT',
  }),
};

const connector = connect(mapState, mapDispatch);

export default connector(SettingScreen);
