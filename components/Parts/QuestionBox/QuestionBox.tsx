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
    <TouchableOpacity style={Style.questionBoxStyle}>
      <View style={Style.questionUserImageBox}>
        <Image style={Style.userImage} source={userImage} />
      </View>
      <View style={Style.questionTitleBox}>
        <Text style={{...Font.Heading6, ...Style.questionTitle}}>{title}</Text>
      </View>
      <View style={Style.questionViewsCountBox}>
        <View style={Style.questionViewContent}>
          <Text
            style={{
              ...Style.questionViewCountsText,
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
