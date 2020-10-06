import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackParamList from '../RootStackParamList';

//Screen
import LoginScreen from '../loginScreen/LoginScreen';
import RegisterScreen from '../registerScreen/RegisterScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AuthContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthContainer;
