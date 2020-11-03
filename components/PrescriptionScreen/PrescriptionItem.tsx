import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {CuraColor} from '../../util';

import {PrescriptionType, updateDatabasePrescriptionTaken} from './function';

const PrescriptionItem = (props: PrescriptionType) => {
  const [takeDrugModalVisible, setTakeDrugModalVisible] = useState(false);

  const {dueDate, hospital, limit, medicine, title, takenToday, id} = props;

  return (
    <>
      <View style={Style.container}>
        <View style={Style.horizontalWrap}>
          <Text style={Style.title}>{hospital}</Text>
          {takenToday ? (
            <Text>Taken Today</Text>
          ) : (
            <Text
              style={Style.takeDrugButton}
              onPress={() => setTakeDrugModalVisible(true)}>
              Take Now
            </Text>
          )}
        </View>
        <View style={Style.horizontalWrap}>
          <Text style={Style.info}>
            <Feather name="alert-circle" /> Due :{' '}
            {formatTimestamp(dueDate.toDate())}
          </Text>
          <Text style={Style.info}>
            <Feather name="hash" /> {limit} Takings Left
          </Text>
        </View>
        <Text style={Style.info}>
          <Feather name="bookmark" /> For :
          <Text style={Style.bold}> {title}</Text>
        </Text>
        <Text>Prescription : </Text>
        {medicine.map((medicineItem, index) => {
          return (
            <Text key={index}>
              <Feather name="chevron-right" /> {medicineItem}
            </Text>
          );
        })}
      </View>
      <TakeDrugModal
        visible={takeDrugModalVisible}
        closeVisible={() => {
          setTakeDrugModalVisible(false);
        }}
        id={id}
        hospital={hospital}
      />
    </>
  );
};

export default PrescriptionItem;

const Style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  horizontalWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    marginBottom: 5,
  },
  lastInfo: {
    marginTop: 5,
  },
  takeDrugButton: {
    borderColor: CuraColor.DarkGreen,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    color: CuraColor.DarkGreen,
    paddingHorizontal: 8,
  },
  centerDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  noButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 18,
    fontSize: 20,
    color: 'white',
  },
  yesButton: {
    backgroundColor: CuraColor.Green,
    borderRadius: 10,
    paddingHorizontal: 18,
    fontSize: 20,
    color: 'white',
  },
  buttonPanel: {
    justifyContent: 'space-between',
    marginTop: 35,
    width: '75%',
  },
  bold: {
    fontWeight: 'bold',
  },
});

type TakeDrugModalProps = {
  visible: boolean;
  closeVisible: () => void;
  id: string;
  hospital: string;
};

const TakeDrugModal = (props: TakeDrugModalProps) => {
  const {visible, closeVisible, id, hospital} = props;
  return (
    <Modal visible={visible}>
      <View style={Style.centerDiv}>
        <Text style={Style.modalTitle}>
          Confirm to take prescriptions from
          <Text style={Style.bold}> {hospital} </Text>
          today?
        </Text>
        <View style={{...Style.horizontalWrap, ...Style.buttonPanel}}>
          <Text style={Style.noButton} onPress={() => closeVisible()}>
            No
          </Text>
          <Text
            style={Style.yesButton}
            onPress={() => {
              updateDatabasePrescriptionTaken(id);
              closeVisible();
            }}>
            Yes
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const formatTimestamp = (timestamp: Date) => {
  const date = timestamp.getDate();
  const month = timestamp.toDateString().split(' ')[1];
  const year = timestamp.getFullYear();

  return `${date} ${month} ${year}`;
};
