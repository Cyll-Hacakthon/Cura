import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Style from './HomeScreen.style';
import {LinearGradient} from 'expo-linear-gradient';
import {Font} from '../../util';
import {MaterialIcons} from '@expo/vector-icons';
import {RootStackParamList} from '../../util';

import QuestionList from '../forumScreen/QuestionList';

const userImage = require('../../assets/images/gitlab-logo.png');

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

interface IPropsSelect {
  recordType: string;
  iconType: string;
}

const DummyData = [
  {title: 'Why am I Dizzy after taking a nap?', viewsCount: '100k'},
  {title: "Why Can't I See when I close my Eye", viewsCount: '200k'},
];

const HomeScreen = () => {
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
        <View style={Style.userImageBox}>
          <Image style={Style.userImage} source={userImage} />
        </View>
      </View>
    );
  };

  const SelectionBox = ({recordType, iconType}: IPropsSelect) => {
    return (
      <LinearGradient
        colors={['#2EF442', '#41CCA2']}
        style={Style.selectionBox}>
        <TouchableOpacity>
          <Text style={{...Font.Heading3, ...Style.recordTypeText}}>
            {recordType}
          </Text>
          <View style={Style.iconContainer}>
            <MaterialIcons name={iconType} size={70} color="white" />
          </View>
        </TouchableOpacity>
      </LinearGradient>
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
            <SelectionBox recordType="Heart Rate" iconType="favorite" />
            <SelectionBox recordType="Exercise Rate" iconType="accessibility" />
          </View>
          <View style={Style.rowContainer}>
            <SelectionBox recordType="Sleep Quality" iconType="brightness-2" />
            <SelectionBox recordType="Stress Level" iconType="poll" />
          </View>
          <Text style={Style.questionListTitle}>Recent Questions</Text>
          <QuestionList questionData={DummyData} />
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
