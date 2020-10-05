import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Style from './ForumScreen.style';
import {Font} from '../../util';
import QuestionList from './QuestionList';

const DummyData = [
  {title: 'Why am I Dizzy after taking a nap?', viewsCount: '100k'},
  {title: "Why Can't I See when I close my Eye", viewsCount: '200k'},
];

const ForumScreen = () => {
  return (
    <>
      <View style={Style.container}>
        <ScrollView>
          <View style={Style.topBox} />
          <Text style={{...Font.Heading1, ...Style.title}}>Forum</Text>
          <TouchableOpacity style={Style.addButton}>
            <MaterialIcons name="add-circle" size={40} color="white" />
          </TouchableOpacity>
          <View style={Style.searchSection}>
            <MaterialIcons
              name="search"
              size={25}
              color="black"
              style={Style.searchIcon}
            />
            <TextInput
              style={Style.input}
              placeholder="Question"
              underlineColorAndroid="transparent"
            />
          </View>
          <QuestionList questionData={DummyData} />
        </ScrollView>
      </View>
    </>
  );
};

export default ForumScreen;
