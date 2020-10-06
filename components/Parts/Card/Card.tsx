import React from 'react';
import {View} from 'react-native';
import Style from './Card.style';

interface ICardProps {
  children: Array<React.ReactElement> | React.ReactElement;
}

const Card = ({children}: ICardProps) => {
  return <View style={Style.card}>{children}</View>;
};

export default Card;
