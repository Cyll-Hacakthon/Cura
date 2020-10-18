import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import Style from './PersonalInfoScreen.style';
import {PersonalInfoType} from './PersonalInfoType';
import {Feather} from '@expo/vector-icons';
import Firebase from '../../util/firebase';
import {retrievePersonalInformation} from './function';

import EditInfoModal from './EditInfoModal';

const userImage = require('../../assets/images/userProfileImage.jpg');

const DummyData = {
  age: -1,
  bloodType: {
    value: 'loading',
    verified: false,
  },
  weight: {
    value: -1,
    lastUpdated: Firebase.firestore.Timestamp.fromDate(new Date()),
  },
  height: {
    value: -1,
    lastUpdated: Firebase.firestore.Timestamp.fromDate(new Date()),
  },
  allergy: [],
  disability: [],
  emergencyContact: [],
  language: [],
  disease: [],
};

const PersonalInfoScreen = () => {
  const [info, setInfo] = useState<PersonalInfoType>(DummyData);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadModal, setloadModal] = useState(false);

  useEffect(() => {
    const getPersonalInformation = async () => {
      setInfo(await retrievePersonalInformation());
      setloadModal(true);
    };

    getPersonalInformation();
  }, []);

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
          <InformationBar
            label="Blood Type"
            info={[info.bloodType.value]}
            verified={info.bloodType.verified}
          />
          <InformationBar label="Weight(KG)" info={[info.weight.value]} />
          <InformationBar label="Height(M)" info={[info.height.value]} />
          <InformationBar label="Allergy" info={[...info.allergy]} />
          <InformationBar label="Disability" info={[...info.disability]} />
          <InformationBar
            label="Emergency Contact"
            info={[...info.emergencyContact]}
          />
          <InformationBar label="Language" info={[...info.language]} />
          <InformationBar label="Disease" info={[...info.disease]} />
        </View>
      </ScrollView>
      <Text
        style={Style.editButton}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Feather name="edit" /> Edit
      </Text>
      {loadModal && (
        <EditInfoModal
          visible={modalVisible}
          info={info}
          setInfo={setInfo}
          toggleVisible={setModalVisible}
        />
      )}
    </>
  );
};

type InformationBarProps = {
  label: string;
  info: Array<string | number>;
  verified?: boolean;
};

const InformationBar = ({label, info, verified}: InformationBarProps) => {
  const border = verified ? Style.greenBorder : {};

  return (
    <View style={Style.horizontalWrap}>
      <Text style={Style.infoLabel}>{label} </Text>
      <View style={{...Style.infoValue, ...border}}>
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
