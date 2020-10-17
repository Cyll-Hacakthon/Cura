import React, {useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import Style from './PersonalInfoScreen.style';
import {PersonalInfoType} from './PersonalInfoType';
import {Feather} from '@expo/vector-icons';

import EditInfoModal from './EditInfoModal';

const userImage = require('../../assets/images/userProfileImage.jpg');

const DummyData = {
  age: 19,
  bloodType: {
    value: 'O+',
    verified: false,
  },
  weight: {
    value: 43.3,
    lastUpdated: 'test',
  },
  height: {
    value: 162,
    lastUpdated: 'test',
  },
  allergy: ['Peanut', 'Shrimp'],
  disability: ['Partially Deaf'],
  emergencyContact: ['012-3456789'],
  language: ['Chinese', 'Malay', 'English'],
  disease: [],
};

const PersonalInfoScreen = () => {
  const [info, setInfo] = useState<PersonalInfoType>(DummyData);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ScrollView style={Style.container}>
        <View style={{...Style.horizontalWrap, ...Style.profileSection}}>
          <Image source={userImage} style={Style.userImage} />
          <View>
            <Text style={Style.username}>Lim Siu Chun</Text>
            <Text style={Style.email}>sclim.richard@gmail.com</Text>
          </View>
        </View>
        <View style={Style.infoSection}>
          <InformationBar label="Age" info={[info.age]} />
          <InformationBar label="Blood Type" info={[info.bloodType.value]} />
          <InformationBar label="Weight(KG)" info={[info.weight.value]} />
          <InformationBar label="Height(M)" info={[info.height.value]} />
          <InformationBar label="Allergy" info={[...info.allergy]} />
          <InformationBar label="Disability" info={[...info.disability]} />
          <InformationBar
            label="Emergency Contact"
            info={[...info.emergencyContact]}
          />
          <InformationBar label="Language" info={[...info.language]} />
          <InformationBar label="Disease" info={[]} />
        </View>
      </ScrollView>
      <Text
        style={Style.editButton}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Feather name="edit" /> Edit
      </Text>
      <EditInfoModal
        visible={modalVisible}
        info={info}
        setInfo={setInfo}
        toggleVisible={setModalVisible}
      />
    </>
  );
};

type InformationBarProps = {
  label: string;
  info: Array<string | number>;
};

const InformationBar = ({label, info}: InformationBarProps) => {
  return (
    <View style={Style.horizontalWrap}>
      <Text style={Style.infoLabel}>{label} </Text>
      <View style={Style.infoValue}>
        {info.length !== 0 ? (
          info.map((data, index) => {
            return (
              <Text style={Style.infoValueText} key={index}>
                {data}
              </Text>
            );
          })
        ) : (
          <Text style={Style.infoValueText}>None</Text>
        )}
      </View>
    </View>
  );
};

export default PersonalInfoScreen;
