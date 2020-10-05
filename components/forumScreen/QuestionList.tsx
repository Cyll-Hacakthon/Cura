import React from 'react';
import {View} from 'react-native';
import Style from './QuestionList.style';
import QuestionBox from './QuestionBox';

interface IForumListProps {
  questionData: Array<{title: string; viewsCount: string}>;
}

const ForumList = ({questionData}: IForumListProps) => {
  return (
    <View style={Style.listContainer}>
      {questionData.map((data, index) => {
        return (
          <QuestionBox
            key={index}
            title={data.title}
            viewsCount={data.viewsCount}
          />
        );
      })}
    </View>
  );
};

export default ForumList;
