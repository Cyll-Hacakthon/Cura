import React, {useState} from 'react';
import Firebase from '../../../util/firebase';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Style from './RegisterScreen.style';
import {StackNavigationProp} from '@react-navigation/stack';
import RootStackParamList from '../RootStackParamList';

import GradientBackground from '../../Parts/GradientBackground/GradientBackground';
import Card from '../../Parts/Card/Card';
import DatePicker from 'react-native-datepicker';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

type RegisterScreenProps = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [tncIsAccepted, setTncIsAccepted] = useState(false);

  const handleRegisterPress = () => {
    if (password !== confirmPassword) {
      return; // Password don't match
    }
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user?.uid;

        if (uid) {
          const data = {
            id: uid,
            email,
            name,
            birthdate,
          };
          const usersRef = Firebase.firestore().collection('users');
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              console.log('Siap Registering');
            })
            .catch((error) => {
              console.log('ERROR: ' + error);
            });
        } else {
          throw Error('No UID');
        }
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <GradientBackground>
      <Text style={Style.titleText}> Cura Register</Text>
      <Card>
        <TextInput
          style={Style.inputStyle}
          placeholder="Name"
          value={name}
          onChangeText={(newValue) => {
            setName(newValue);
          }}
        />
        <TextInput
          style={Style.inputStyle}
          placeholder="Email, eg: johndoe@email.com"
          value={email}
          onChangeText={(newValue) => {
            setEmail(newValue);
          }}
        />
        <TextInput
          style={Style.inputStyle}
          placeholder="Password, make it secure!"
          secureTextEntry={true}
          value={password}
          onChangeText={(newValue) => {
            setPassword(newValue);
          }}
        />
        <TextInput
          style={Style.inputStyle}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(newValue) => {
            setConfirmPassword(newValue);
          }}
        />
        <View style={Style.inputBox}>
          <Text>Birthdate</Text>
          <DatePicker
            androidMode="spinner"
            date={birthdate}
            format="DD-MM-YYYY"
            placeholder="Birthdate"
            showIcon={false}
            onDateChange={(date) => {
              setBirthdate(date);
            }}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{dateInput: Style.dateInputStyle}}
          />
        </View>

        <View style={Style.horizontalBar}>
          <CheckBox
            value={tncIsAccepted}
            onValueChange={(newValue) => setTncIsAccepted(newValue)}
          />
          <Text>I accept the </Text>
          <Text style={Style.underlineText}>Terms & Condition</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleRegisterPress();
          }}>
          <View style={Style.buttonStyle}>
            <Text style={Style.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
        <View style={Style.horizontalBar}>
          <Text>Already Have an Account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={Style.underlineText}>Login!</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </GradientBackground>
  );
};

export default RegisterScreen;
