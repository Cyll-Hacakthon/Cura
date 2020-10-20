import React, {useState, useEffect} from 'react';
import {View, Text, Modal} from 'react-native';
import Style from './NumberInformationScreen.style';
import {getQueueInformation} from './function';

import Card from '../Parts/Card/Card';

const NumberInformationScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [hospital, setHospital] = useState('Loading...');
  const [hospitalAddress, setHospitalAddress] = useState('Loading...');
  const [patientName, setPatientName] = useState('Loading...');
  const [visitPurpose, setVisitPurpose] = useState('Loading...');
  const [specialist, setSpecialist] = useState('Loading...');
  const [doctor, setDoctor] = useState('Loading...');
  const [patientNumber, setPatientNumber] = useState('Loading...');
  const [currentNumber, setCurrentNumber] = useState('Loading...');
  const [arriveTime, setArriveTime] = useState('Loading...');

  useEffect(() => {
    const setupInformation = async () => {
      const data = await getQueueInformation();

      setHospital(data.hospital);
      setHospitalAddress(data.hospitalAddress);
      setPatientName(data.patientName);
      setVisitPurpose(data.visitPurpose);
      setSpecialist(data.specialist);
      setDoctor(data.doctor);
      setPatientName(data.patientName);
      setPatientNumber(data.patientNumber);
      setCurrentNumber(data.currentNumber);
      setArriveTime(data.arriveTime);
    };
    setupInformation();
  }, []);

  return (
    <>
      <View style={Style.container}>
        <Card style={Style.customCard}>
          <Text style={Style.title}>Queue Information</Text>
          <InformationBar label="Hospital" value={hospital} />
          <InformationBar label="Hospital Address" value={hospitalAddress} />
          <InformationBar label="Patient" value={patientName} />
          <InformationBar label="Visit Purpose" value={visitPurpose} />
          <InformationBar label="Specialist" value={specialist} />
          <InformationBar label="Doctor" value={doctor} />
          <View style={Style.horizontalLine} />
          <InformationBar label="Your Number" value={patientNumber} />
          <InformationBar label="Current Number" value={currentNumber} />
          <InformationBar label="Reach Before" value={arriveTime} />
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
