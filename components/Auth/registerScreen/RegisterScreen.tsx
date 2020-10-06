import React, {useState} from 'react';
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
  const [birthdate, setBirthdate] = useState('');
  const [tncIsAccepted, setTncIsAccepted] = useState(false);

  return (
    <GradientBackground>
      <Text style={Style.titleText}> Cura Register</Text>
      <Card>
        <TextInput style={Style.inputStyle} placeholder="Name" />
        <TextInput
          style={Style.inputStyle}
          placeholder="Email, eg: johndoe@email.com"
        />
        <TextInput
          style={Style.inputStyle}
          placeholder="Password, make it secure!"
          secureTextEntry={true}
        />
        <TextInput
          style={Style.inputStyle}
          placeholder="Confirm Password"
          secureTextEntry={true}
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
        <TouchableOpacity>
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
