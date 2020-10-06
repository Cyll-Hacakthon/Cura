import React, {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Style from './LoginScreen.style';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import RootStackParamList from '../RootStackParamList';

import {RootState} from '../../../store/reducers/rootReducer';

import Card from '../../Parts/Card/Card';
import GradientBackground from '../../Parts/GradientBackground/GradientBackground';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type PropsFromRedux = ConnectedProps<typeof connector>;

type LoginScreenProps = PropsFromRedux & {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = (props: LoginScreenProps) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <GradientBackground>
      <Text style={Style.titleText}>Cura Login</Text>
      <Card>
        <TextInput
          style={Style.inputStyle}
          placeholder="Email"
          value={userEmail}
          onChangeText={(newValue) => {
            setUserEmail(newValue);
          }}
        />
        <TextInput
          style={Style.inputStyle}
          placeholder="Password"
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(newValue) => {
            setUserPassword(newValue);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            props.loginUser(userEmail, userPassword);
          }}>
          <View style={Style.buttonStyle}>
            <Text style={Style.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>

        <View style={Style.signUpTextbar}>
          <Text>Don't Have an Account? </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Register');
            }}>
            <Text style={Style.signUpButton}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </GradientBackground>
  );
};

const mapState = (state: RootState) => {
  return {
    user: state.user,
  };
};

const mapDispatch = {
  loginUser: (username: string, password: string) => ({
    type: 'LOGIN',
    payload: {username, password},
  }),
};

const connector = connect(mapState, mapDispatch);

export default connector(LoginScreen);
