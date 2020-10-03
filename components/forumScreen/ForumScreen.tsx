import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
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
      </TouchableOpacity>
      <TouchableOpacity style={Style.forumBoxStyle}>
        <View style={Style.forumImagBox}>
          <Image style={Style.forumImage} source={userImage}></Image>
        </View>
        <View style={Style.forumTextBox}>
          <Text style={{...Font.Heading6, ...Style.forumText}}>
            Why can’t I see anything when I close my eye?{' '}
          </Text>
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
