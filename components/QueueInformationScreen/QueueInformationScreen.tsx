import React, {useEffect, useState} from 'react';
import Style from './QueueInformation.style';
import {View, Text, TextInput} from 'react-native';
import TakeNumberStackParamList from '../Parts/TakeNumberContainer/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {getHospitalInformation} from './functions';

import TopBox from '../Parts/TopBox/TopBox';
import Card from '../Parts/Card/Card';
import Dropdown from '../Parts/Dropdown/Dropdown';
import Checkbox from '@react-native-community/checkbox';
import RootStackParamList from '../Parts/TakeNumberContainer/RootStackParamList';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Dummy Data

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
  const [specialists, setSpecialists] = useState<
    Array<{label: string; value: string}>
  >([]);
  const [doctors, setDoctors] = useState<any>([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(
    null,
  );
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [agreeConsequences, setAgreeConsequences] = useState(false);
  const [agreeTNC, setAgreeTNC] = useState(false);

  useEffect(() => {
    getHospitalInformation(
      route.params.hospitalID,
      setHospitalName,
      setHospitalAddress,
      setSpecialists,
      setDoctors,
    );
  }, [route.params.hospitalID]);

  return (
    <View>
      <TopBox>
        <View style={Style.hospitalInfo}>
          <Text style={Style.hospitalName}>{hospitalName || 'Loading...'}</Text>
          <Text style={Style.hospitalAddress}>
            {hospitalAddress || 'Loading...'}
          </Text>
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
            items={specialists}
            selectedItem={selectedSpecialist}
            handleChange={(newItem) => {
              setSelectedSpecialist(newItem);
              setSelectedDoctor(null);
            }}
            disabled={visitPurpose === '' ? true : false}
            placeholder="Select Specialist"
            searchablePlaceholder="Search Specialist"
          />
        </View>
        <View style={Style.questionBox}>
          <Text>Doctor of Preference</Text>
          <Dropdown
            items={
              selectedSpecialist === null
                ? []
                : doctors[`${selectedSpecialist}`]
            }
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
