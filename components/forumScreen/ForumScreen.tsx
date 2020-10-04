import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {MaterialIcons, Feather} from '@expo/vector-icons';
import Navbar from '../NavBar/NavBar';
import Style from './ForumScreen.style';
import {Font} from '../../util';

interface IProps {
  handleNavigation: Function;
}

const userImage = require('../../assets/images/gitlab-logo.png');

const ForumList = () => {
  return (
    <View style={Style.forumContainer}>
      <TouchableOpacity style={Style.forumBoxStyle}>
        <View style={Style.forumImagBox}>
          <Image style={Style.forumImage} source={userImage}></Image>
        </View>
        <View style={Style.forumTextBox}>
          <Text style={{...Font.Heading6, ...Style.forumText}}>
            Why Am I Dizzy After Taking A Nap?
          </Text>
        </View>
        <View style={Style.forumViewBox}>
          <View style={Style.forumViewContent}>
            <Text
              style={{
                ...Style.forumViewText,
                ...Font.Heading6,
              }}>{`100k `}</Text>
            <Feather name="eye" size={20} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Style.forumBoxStyle}>
        <View style={Style.forumImagBox}>
          <Image style={Style.forumImage} source={userImage}></Image>
        </View>
        <View style={Style.forumTextBox}>
          <Text style={{...Font.Heading6, ...Style.forumText}}>
            Why Am I Dizzy After Taking A Nap?{' '}
          </Text>
        </View>
        <View style={Style.forumViewBox}>
          <View style={Style.forumViewContent}>
            <Text
              style={{
                ...Style.forumViewText,
                ...Font.Heading6,
              }}>{`100k `}</Text>
            <Feather name="eye" size={20} color="white" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ForumScreen = (props: IProps) => {
  return (
    <>
      <View style={Style.container}>
        <ScrollView>
          <View style={Style.topBox}></View>
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
          <ForumList />
        </ScrollView>
      </View>
      <View style={Style.navbar}>
        <Navbar handleNavigation={props.handleNavigation} />
      </View>
    </>
  );
};

export default ForumScreen;
