import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import Style from './NumberInformationScreen.style';

import Card from '../Parts/Card/Card';

const NumberInformationScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <View style={Style.container}>
        <Card style={Style.customCard}>
          <Text style={Style.title}>Queue Information</Text>
          <InformationBar label="Hospital" value="Pantai Hospital Penang" />
          <InformationBar
            label="Hospital Address"
            value="82, Jalan Tengah, Bandar Bayan Baru, 11900 Bayan Lepas, Pulau Pinang"
          />
          <InformationBar label="Patient" value="Lim Siu Chun" />
          <InformationBar
            label="Visit Purpose"
            value="Unknown Sharp Headache"
          />
          <InformationBar label="Specialist" value="Neurology" />
          <InformationBar label="Doctor" value="Dr. Nassim Nicholas Taleb" />
          <View style={Style.horizontalLine} />
          <InformationBar label="Your Number" value="1033" />
          <InformationBar label="Current Number" value="1022" />
          <InformationBar label="Reach Before" value="3:22 pm" />
          <Text
            style={Style.cancelButton}
            onPress={() => {
              setShowModal(true);
            }}>
            Cancel Queue
          </Text>
        </Card>
      </View>
      <Modal visible={showModal}>
        <View style={Style.modal}>
          <View>
            <Text style={Style.modalQuestion}>Confirm Cancel Queue?</Text>
            <View style={Style.horizontalWrap}>
              <Text
                style={Style.goBackButton}
                onPress={() => {
                  setShowModal(false);
                }}>
                Go Back
              </Text>
              <Text style={Style.cancelButton}>Confirm </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

type InformationBarProps = {
  label: string;
  value: string;
};

const InformationBar = ({label, value}: InformationBarProps) => {
  return (
    <View style={Style.horizontalWrap}>
      <Text style={Style.label}>{label}</Text>
      <Text style={Style.value}>{value}</Text>
    </View>
  );
};

export default NumberInformationScreen;
