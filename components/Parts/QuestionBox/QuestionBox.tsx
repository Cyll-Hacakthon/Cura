import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Style from './QuestionBox.style';
import {Font} from '../../../util';

const userImage = require('../../../assets/images/gitlab-logo.png');

interface IQuestionBoxProps {
  // Remember to include image during backend development
  title: string;
  viewsCount: string;
}

const QuestionBox = ({title, viewsCount}: IQuestionBoxProps) => {
  return (
    <TouchableOpacity style={Style.forumBoxStyle}>
      <View style={Style.forumImagBox}>
        <Image style={Style.forumImage} source={userImage} />
      </View>
      <View style={Style.forumTextBox}>
        <Text style={{...Font.Heading6, ...Style.forumText}}>{title}</Text>
      </View>
      <View style={Style.forumViewBox}>
        <View style={Style.forumViewContent}>
          <Text
            style={{
              ...Style.forumViewText,
              ...Font.Heading6,
            }}>
            {viewsCount + ' '}
          </Text>
          <Feather name="eye" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionBox;
