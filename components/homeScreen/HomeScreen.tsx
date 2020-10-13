import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect, ConnectedProps} from 'react-redux';

import Style from './HomeScreen.style';
import {RootState} from '../../store/reducers/rootReducer';
import {RootStackParamList} from '../../util';
import SelectionBox from '../Parts/SelectionBox/SelectionBox';

const userImage = require('../../assets/images/userProfileImage.jpg');

type PropsFromRedux = ConnectedProps<typeof connector>;

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type HomeScreenProps = PropsFromRedux & {};

interface IPropsSelect {
  recordType: string;
  iconType: string;
}

const HomeScreen = ({username}: HomeScreenProps) => {
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
        <ScrollView>
          <View style={Style.topBox}>
            <NameBox />
          </View>
          <View style={Style.rowContainer}>
            <SelectionBox title="Medical Report" iconName="favorite" />
            <SelectionBox title="Take Number" iconName="assignment" />
            <SelectionBox title="Personal Data" iconName="storage" />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const mapState = (state: RootState) => {
  return {username: state.user.name};
};

const connector = connect(mapState);

export default connector(HomeScreen);
