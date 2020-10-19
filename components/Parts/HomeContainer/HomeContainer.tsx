import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CuraColor} from '../../../util';

import HomeScreen from '../../homeScreen/HomeScreen';
import PersonalInfoScreen from '../../PersonalInfoScreen/PersonalInfoScreen';
import MedicalReportsScreen from '../../MedicalReportsScreen/MedicalReportsScreen';

const Stack = createStackNavigator();

const HomeContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Medical Reports"
        component={MedicalReportsScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: Style.greenBackground,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Personal Info"
        component={PersonalInfoScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: Style.greenBackground,
        }}
      />
    </Stack.Navigator>
  );
};

const Style = StyleSheet.create({
  greenBackground: {
    backgroundColor: CuraColor.Green,
  },
});

export default HomeContainer;
