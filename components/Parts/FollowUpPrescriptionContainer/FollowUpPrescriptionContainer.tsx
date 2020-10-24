import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CuraColor} from '../../../util';

import FollowUpScreen from '../../FollowUpScreen/FollowUpScreen';
import PrescriptionScreen from '../../PrescriptionScreen/PrescriptionScreen';

const Tab = createMaterialTopTabNavigator();

const FollowUpPrescriptionContainer = () => {
  return (
    <Tab.Navigator
      style={Style.tabStyle}
      tabBarOptions={{indicatorStyle: {backgroundColor: CuraColor.Green}}}>
      <Tab.Screen name="Follow Up" component={FollowUpScreen} />
      <Tab.Screen name="Prescription" component={PrescriptionScreen} />
    </Tab.Navigator>
  );
};

export default FollowUpPrescriptionContainer;

const Style = StyleSheet.create({
  tabStyle: {
    paddingTop: 15,
  },
});
