import React, {useState} from 'react';
import Style from './QueueInformation.style';
import {View, Text, TextInput} from 'react-native';

import TopBox from '../Parts/TopBox/TopBox';
import Card from '../Parts/Card/Card';
import Dropdown from '../Parts/Dropdown/Dropdown';
import Checkbox from '@react-native-community/checkbox';

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

const QueueInformationScreen = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [agreeConsequences, setAgreeConsequences] = useState(false);
  const [agreeTNC, setAgreeTNC] = useState(false);

  return (
    <View>
      <TopBox>
        <View style={Style.hospitalInfo}>
          <Text style={Style.hospitalName}>Island Hospital</Text>
          <Text style={Style.hospitalAddress}>
            308, Jalan Macalister, 10450 George Town, Pulau Pinang
          </Text>
        </View>
      </TopBox>
      <Card style={Style.cardStyle}>
        <View>
          <Text>Please State Your Visit Purpose</Text>
          <TextInput
            style={Style.textInputStyle}
            placeholder="eg: Skin Allergy, Nausea"
          />
        </View>
        <View style={Style.questionBox}>
          <Text>Specialist</Text>
          <Dropdown
            items={Specialist}
            selectedItem={selectedSpecialist}
            handleChange={setSelectedSpecialist}
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
        <View style={Style.buttonBox}>
          <Text style={Style.buttonText}>Take Number</Text>
        </View>
      </Card>
    </View>
  );
};

export default QueueInformationScreen;
