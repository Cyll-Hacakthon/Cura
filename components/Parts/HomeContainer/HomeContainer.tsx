import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../homeScreen/HomeScreen';
import PersonalInfoScreen from '../../PersonalInfoScreen/PersonalInfoScreen';

const Stack = createStackNavigator();

const HomeContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Personal Info" component={PersonalInfoScreen} />
    </Stack.Navigator>
  );
};

export default HomeContainer;
