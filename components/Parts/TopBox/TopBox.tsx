import React from 'react';
import {View, Text} from 'react-native';
import Style from './TopBox.style';

type TopBoxProps = {
  children: React.ReactElement;
  style?: Object;
};

const TopBox = ({children, style}: TopBoxProps) => {
  return <View style={{...Style.topBox, ...style}}>{children}</View>;
};

export default TopBox;
