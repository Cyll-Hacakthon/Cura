import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CuraColor} from '../../../util';

import SettingScreen from '../../settingScreen/SettingScreen';
import PersonalInfoScreen from '../../PersonalInfoScreen/PersonalInfoScreen';
import MedicalReportsScreen from '../../MedicalReportsScreen/MedicalReportsScreen';
import DataManagementScreen from '../../DataManagementScreen/DataManagementScreen';
import FollowUpPrescriptionContainer from '../FollowUpPrescriptionContainer/FollowUpPrescriptionContainer';

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
        name="Medical Reports"
        component={MedicalReportsScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: Style.greenBackground,
        }}
      />
      <Stack.Screen
        name="Personal Info"
        component={PersonalInfoScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: Style.greenBackground,
        }}
      />
      <Stack.Screen
        name="Data Management"
        component={DataManagementScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: Style.greenBackground,
        }}
      />
      <Stack.Screen
        name="Follow Up Prescription"
        component={FollowUpPrescriptionContainer}
        options={{
          headerShown: false,
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
