import React from 'react';
import {View} from 'react-native';
import Style from './Card.style';

interface ICardProps {
  children: Array<React.ReactElement> | React.ReactElement;
  style?: Object;
}

const Card = ({children, style}: ICardProps) => {
  return <View style={{...Style.card, ...style}}>{children}</View>;
};

export default Card;
