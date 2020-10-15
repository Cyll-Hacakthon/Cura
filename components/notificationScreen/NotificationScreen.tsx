import React from 'react';
import {View, Text} from 'react-native';
import Style from './NotificationScreen.style';
import {Feather} from '@expo/vector-icons';

const NotificationScreen = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.noNotificationIndicator}>
        <Feather name="smile" color="grey" size={15} />
        {'  '}
        You Have No Notifications To See.
      </Text>
    </View>
  );
};

export default NotificationScreen;
