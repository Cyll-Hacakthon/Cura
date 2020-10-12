import React, {useEffect, useState} from 'react';
import Style from './QueueInformation.style';
import {View, Text, TextInput} from 'react-native';
import TakeNumberStackParamList from '../Parts/TakeNumberContainer/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Firebase from '../../util/firebase';

import TopBox from '../Parts/TopBox/TopBox';
import Card from '../Parts/Card/Card';
import Dropdown from '../Parts/Dropdown/Dropdown';
import Checkbox from '@react-native-community/checkbox';
import RootStackParamList from '../Parts/TakeNumberContainer/RootStackParamList';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Dummy Data
const Specialist = [
  {
    label: 'Pediatrics',
    value: 'pediatrics',
  },
  {
    label: 'Neurology',
    value: 'neurology',
  },
];

const Doctors = [
  {
    label: 'Dr. Muhammad Bin Abdullah',
    value: 'PD12345',
  },
  {
    label: 'Dr. Noor Hisham Abdullah',
    value: 'NR12345',
  },
];

type QueueInformationNavigationProp = StackNavigationProp<
  TakeNumberStackParamList,
  'Queue Information'
>;

type QueueInformationRouteProp = RouteProp<
  RootStackParamList,
  'Queue Information'
>;

type QueueInformationProps = {
  navigation: QueueInformationNavigationProp;
  route: QueueInformationRouteProp;
};

const QueueInformationScreen = ({route}: QueueInformationProps) => {
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [visitPurpose, setVisitpurpose] = useState('');
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [agreeConsequences, setAgreeConsequences] = useState(false);
  const [agreeTNC, setAgreeTNC] = useState(false);

  useEffect(() => {
    const getHospitalInformation = async () => {
      const hospitalRef = Firebase.firestore()
        .collection('hospitals')
        .doc(route.params.hospitalID);

      const hospitalDoc = await hospitalRef.get();

      if (hospitalDoc) {
        const hospitalData = hospitalDoc.data();
        if (hospitalData) {
          setHospitalName(hospitalData.name);
          setHospitalAddress(hospitalData.address);
        }
      } else {
        console.log('no such document :(');
      }
    };

    getHospitalInformation();
  }, [route.params.hospitalID]);

  return (
    <View>
      <TopBox>
        <View style={Style.hospitalInfo}>
          <Text style={Style.hospitalName}>{hospitalName}</Text>
          <Text style={Style.hospitalAddress}>{hospitalAddress}</Text>
        </View>
      </TopBox>
      <Card style={Style.cardStyle}>
        <View>
          <Text>Please State Your Visit Purpose</Text>
          <TextInput
            style={Style.textInputStyle}
            placeholder="eg: Skin Allergy, Nausea"
            value={visitPurpose}
            onChangeText={(newValue) => setVisitpurpose(newValue)}
          />
        </View>
        <View style={Style.questionBox}>
          <Text>Specialist</Text>
          <Dropdown
            items={Specialist}
            selectedItem={selectedSpecialist}
            handleChange={setSelectedSpecialist}
            disabled={visitPurpose === '' ? true : false}
            placeholder="Select Specialist"
            searchablePlaceholder="Search Specialist"
          />
        </View>
        <View style={Style.questionBox}>
          <Text>Doctor of Preference</Text>
          <Dropdown
            items={Doctors}
            selectedItem={selectedDoctor}
            handleChange={setSelectedDoctor}
            disabled={
              visitPurpose === '' || selectedSpecialist === null ? true : false
            }
            placeholder="Select Doctor"
            searchablePlaceholder="Search Doctor"
          />
        </View>
        <View style={Style.inlineStyle}>
          <Checkbox
            value={agreeConsequences}
            onValueChange={(newValue) => {
              setAgreeConsequences(newValue);
            }}
          />
          <Text>I understand the consequences of being late</Text>
        </View>
        <View style={Style.inlineStyle}>
          <Checkbox
            value={agreeTNC}
            onValueChange={(newValue) => {
              setAgreeTNC(newValue);
            }}
          />
          <Text>I agree to Terms & Conditions</Text>
        </View>
        <TouchableOpacity>
          <View style={Style.buttonBox}>
            <Text style={Style.buttonText}>Take Number</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default QueueInformationScreen;
