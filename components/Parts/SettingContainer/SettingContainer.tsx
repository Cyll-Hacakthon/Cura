import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CuraColor} from '../../../util';

import SettingScreen from '../../settingScreen/SettingScreen';
import PersonalInfoScreen from '../../PersonalInfoScreen/PersonalInfoScreen';
import MedicalReportsScreen from '../../MedicalReportsScreen/MedicalReportsScreen';

const Stack = createStackNavigator();

const SettingContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TMedical Reports"
        component={MedicalReportsScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: Style.greenBackground,
        }}
      />
      <Stack.Screen
        name="TPersonal Info"
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

export default SettingContainer;
