import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CuraColor} from '../../../util';

import TakeNumberScreen from '../../takeNumberScreen/TakeNumberScreen';
import QueueInformationScreen from '../../QueueInformationScreen/QueueInformationScreen';

const Stack = createStackNavigator();

const TakeNumberContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Take Number">
      <Stack.Screen
        name="Take Number"
        component={TakeNumberScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Queue Information"
        component={QueueInformationScreen}
        options={{
          headerTitle: '',
          headerTintColor: CuraColor.White,
          headerBackTitleVisible: true,
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerStatusBarHeight: 15,
        }}
      />
    </Stack.Navigator>
  );
};

export default TakeNumberContainer;
