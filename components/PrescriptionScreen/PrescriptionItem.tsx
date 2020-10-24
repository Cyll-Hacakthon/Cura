import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {CuraColor} from '../../util';

const PrescriptionItem = () => {
  const [takeDrugModalVisible, setTakeDrugModalVisible] = useState(false);

  return (
    <>
      <View style={Style.container}>
        <View style={Style.horizontalWrap}>
          <Text style={Style.title}>Methylphenidate</Text>
          <Text
            style={Style.takeDrugButton}
            onPress={() => setTakeDrugModalVisible(true)}>
            Take Now
          </Text>
        </View>
        <Text style={Style.info}>
          <Feather name="map-pin" /> Pantai Hospital Penang
        </Text>
        <Text style={Style.info}>
          <Feather name="alert-circle" /> Due : 13 Dec 2020
        </Text>
        <Text>
          <Feather name="hash" /> 5 Takings Left
        </Text>
      </View>
      <TakeDrugModal
        visible={takeDrugModalVisible}
        closeVisible={() => {
          setTakeDrugModalVisible(false);
        }}
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
};

const TakeDrugModal = (props: TakeDrugModalProps) => {
  const {visible, closeVisible} = props;
  return (
    <Modal visible={visible}>
      <View style={Style.centerDiv}>
        <Text style={Style.modalTitle}>
          Confirm to take
          <Text style={Style.bold}> Methylphenidate </Text>
          from
          <Text style={Style.bold}> Pantai Hospital Penang </Text>
          today?
        </Text>
        <View style={{...Style.horizontalWrap, ...Style.buttonPanel}}>
          <Text style={Style.noButton} onPress={() => closeVisible()}>
            No
          </Text>
          <Text style={Style.yesButton}>Yes</Text>
        </View>
      </View>
    </Modal>
  );
};
