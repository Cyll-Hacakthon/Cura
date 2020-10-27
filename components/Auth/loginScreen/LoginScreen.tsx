import React, {useState} from 'react';
import Firebase from '../../../util/firebase';
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

  const handleLoginPress = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((response) => {
        const uid = response.user?.uid;
        const usersRef = Firebase.firestore().collection('users');

        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              console.log("User Doesn't Exists");
              return;
            }
            const user = firestoreDocument.data();
            props.loginUser(user?.email, user?.name);
          });
      });
  };

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
            handleLoginPress();
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
        <View style={Style.signUpTextbar}>
          <Text style={Style.signUpButton}>Forgot Password?</Text>
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
  loginUser: (email: string, name: string) => ({
    type: 'LOGIN',
    payload: {email, name},
  }),
};

const connector = connect(mapState, mapDispatch);

export default connector(LoginScreen);
