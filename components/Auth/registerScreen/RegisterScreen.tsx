import React, {useState} from 'react';
import Firebase from '../../../util/firebase';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Style from './RegisterScreen.style';
import {StackNavigationProp} from '@react-navigation/stack';
import RootStackParamList from '../RootStackParamList';
import {RegisterInformationType} from './RegisterInformationType';

import GradientBackground from '../../Parts/GradientBackground/GradientBackground';
import Card from '../../Parts/Card/Card';
import DatePicker from 'react-native-datepicker';
import {ScrollView} from 'react-native-gesture-handler';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

type RegisterScreenProps = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [name, setName] = useState('');
  const [icNumber, setIC] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [tncIsAccepted, setTncIsAccepted] = useState(false);
  const [address, setAddress] = useState<{
    home: string;
    city: string;
    state: string;
    postal: string;
  }>({home: '', city: '', state: '', postal: ''});

  const handleRegisterPress = () => {
    if (password !== confirmPassword) {
      return; // Password don't match
    }
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user?.uid;

        if (uid) {
          const icLastFourDigit = icNumber.slice(-4, icNumber.length);
          const splitBirthdate = birthdate.split('-');
          const data: RegisterInformationType = {
            id: uid,
            ic: icNumber,
            gender: Number(icLastFourDigit) % 2 === 1 ? 'male' : 'female',
            email,
            name,
            birthdate: Firebase.firestore.Timestamp.fromDate(
              new Date(
                Number(splitBirthdate[2]), // Year
                Number(splitBirthdate[1]) - 1, //Month : javascript months start from 0
                Number(splitBirthdate[0]), // Date
              ),
            ),

            address: `${address.home}, ${address.postal}, ${address.city}, ${address.state}`,
          };
          const usersRef = Firebase.firestore().collection('users');
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              console.log('Siap Registering');
              //navigation.navigate('Login');
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
      <Card style={Style.customCardStyle}>
        <ScrollView>
          <View style={Style.labelBox}>
            <Text>Personal Information</Text>
            <View style={Style.horizontalLine} />
          </View>
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
            placeholder='IC Number, with dash "-"'
            value={icNumber}
            onChangeText={(newValue) => {
              setIC(newValue);
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
          <TextInput
            style={Style.inputStyle}
            placeholder="Email, eg: johndoe@email.com"
            value={email}
            onChangeText={(newValue) => {
              setEmail(newValue);
            }}
          />
          <View style={Style.labelBox}>
            <Text style={Style.labelText}>Home Address</Text>
            <View style={Style.horizontalLine} />
          </View>
          <TextInput
            style={Style.inputStyle}
            placeholder="Address"
            value={address.home}
            onChangeText={(newValue) => {
              setAddress({
                ...address,
                home: newValue,
              });
            }}
          />
          <View style={Style.inputBox}>
            <TextInput
              style={Style.addressInputBox}
              textContentType="postalCode"
              placeholder="Postal Code"
              value={address.postal}
              onChangeText={(newValue) => {
                setAddress({
                  ...address,
                  postal: newValue,
                });
              }}
            />
            <TextInput
              style={Style.addressInputBox}
              placeholder="City"
              value={address.city}
              onChangeText={(newValue) => {
                setAddress({
                  ...address,
                  city: newValue,
                });
              }}
            />
          </View>
          <TextInput
            style={Style.inputStyle}
            placeholder="State"
            value={address.state}
            onChangeText={(newValue) => {
              setAddress({
                ...address,
                state: newValue,
              });
            }}
          />
          <View style={Style.labelBox}>
            <Text style={Style.labelText}>Security</Text>
            <View style={Style.horizontalLine} />
          </View>
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
        </ScrollView>
      </Card>
    </GradientBackground>
  );
};

export default RegisterScreen;
