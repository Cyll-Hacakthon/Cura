import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Style from './HealthStatPanel.style';
import {Feather, FontAwesome5} from '@expo/vector-icons';

import GradientBackground from '../GradientBackground/GradientBackground';

const HealthStatPanel = () => {
  return (
    <TouchableOpacity style={Style.fixTouchOpac}>
      <GradientBackground type={'Light'} style={Style.customCardStyle}>
        <View style={Style.horizontalContainer}>
          <Feather
            name="moon"
            size={30}
            color="white"
            style={Style.iconCustomStyle}
          />
          <Text style={Style.infoText}>Slept 8h 20m last night</Text>
        </View>
        <View style={Style.horizontalContainer}>
          <Feather
            name="heart"
            size={30}
            color="white"
            style={Style.iconCustomStyle}
          />
          <Text style={Style.infoText}>Heart Rate: 87 bpm</Text>
        </View>
        <View style={Style.horizontalContainer}>
          <FontAwesome5
            name="walking"
            size={30}
            color="white"
            style={Style.iconCustomStyle}
          />
          <Text style={Style.infoText}>Walked : 10501 Steps Yesterday</Text>
        </View>
      </GradientBackground>
    </TouchableOpacity>
  );
};

export default HealthStatPanel;
