import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialIcons} from '@expo/vector-icons';
import Style from './SelectionBox.style';

type SelectionBoxProps = {
  title: string;
  iconName: string;
  onPress?: Function;
};

const SelectionBox = ({title, iconName, onPress}: SelectionBoxProps) => {
  return (
    <LinearGradient colors={['#2EF442', '#41CCA2']} style={Style.selectionBox}>
      <TouchableOpacity onPress={() => onPress && onPress()}>
        <Text style={Style.recordTypeText}>{title}</Text>
        <View style={Style.iconContainer}>
          <MaterialIcons name={iconName} size={70} color="white" />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SelectionBox;
