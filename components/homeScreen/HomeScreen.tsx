import React from 'react';
import {View, Text, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect, ConnectedProps} from 'react-redux';

import Style from './HomeScreen.style';
import {RootState} from '../../store/reducers/rootReducer';
import {RootStackParamList} from '../Parts/HomeContainer/RootStackParamList';
import SelectionBox from '../Parts/SelectionBox/SelectionBox';
import HealthStatPanel from '../Parts/HealthStatPanel/HealthStatPanel';

const userImage = require('../../assets/images/userProfileImage.jpg');

type PropsFromRedux = ConnectedProps<typeof connector>;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = PropsFromRedux & {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({username, navigation}: HomeScreenProps) => {
  const NameBox = () => {
    return (
      <View style={Style.nameBox}>
        <View>
          <View>
            <Text style={Style.welcomeWord}>Welcome Back,</Text>
          </View>
          <View>
            <Text style={Style.userName}>{username}</Text>
          </View>
        </View>
        <View style={Style.userImageBox}>
          <Image style={Style.userImage} source={userImage} />
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={Style.container}>
        <View style={Style.topBox}>
          <NameBox />
        </View>
        <View style={Style.rowContainer}>
          <SelectionBox title="Medical Reports" iconName="favorite" />
          <SelectionBox
            title="Take Number"
            iconName="assignment"
            onPress={() => {
              navigation.navigate('Take Number');
            }}
          />
          <SelectionBox
            title="Personal Information"
            iconName="storage"
            onPress={() => {
              navigation.navigate('Personal Info');
            }}
          />
        </View>
        <HealthStatPanel />
      </View>
    </>
  );
};

const mapState = (state: RootState) => {
  return {username: state.user.name};
};

const connector = connect(mapState);

export default connector(HomeScreen);
