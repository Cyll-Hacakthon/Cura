import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {CuraColor} from '../../util';
import {PersonalInfoType} from './PersonalInfoType';
import {Feather} from '@expo/vector-icons';
import {FadeOutToBottomAndroidSpec} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';

type EditInfoModalProps = {
  info: PersonalInfoType;
  setInfo: Function;
  visible: boolean;
  toggleVisible: (value: boolean) => void;
};

const EditInfoModal = ({
  info,
  setInfo,
  visible,
  toggleVisible,
}: EditInfoModalProps) => {
  const [weight, setWeight] = useState({
    value: info.weight.value,
    lastUpdated: info.weight.lastUpdated,
  });
  const [height, setHeight] = useState({
    value: info.height.value,
    lastUpdated: info.height.lastUpdated,
  });
  const [allergy, setAllergy] = useState({
    nextId: info.allergy.length,
    list: info.allergy.map(listMapping),
  });
  const [disability, setDisability] = useState({
    nextId: info.disability.length,
    list: info.disability.map(listMapping),
  });
  const [emergencyContact, setEmergencyContact] = useState({
    nextId: info.emergencyContact.length,
    list: info.emergencyContact.map(listMapping),
  });
  const [language, setLanguage] = useState({
    nextId: info.language.length,
    list: info.language.map(listMapping),
  });
  const [disease, setDisease] = useState({
    nextId: info.disease.length,
    list: info.disease.map(listMapping),
  });

  return (
    <>
      <Modal visible={visible}>
        <ScrollView style={Style.container}>
          <Text style={Style.title}>Update Personal Information</Text>
          <InputBox
            label="Weight"
            placeholder="in KG"
            value={String(weight.value)}
            onChange={(newValue: any) => {
              setWeight({...weight, value: newValue});
            }}
          />
          <InputBox
            label="Height"
            placeholder="in Meter"
            value={String(height.value)}
            onChange={(newValue: any) => {
              setHeight({...height, value: newValue});
            }}
          />
          <MultipleInputBox
            label="Allergy"
            values={allergy}
            setValues={setAllergy}
          />
          <MultipleInputBox
            label="Disability"
            values={disability}
            setValues={setDisability}
          />
          <MultipleInputBox
            label="Emergency Contact"
            values={emergencyContact}
            setValues={setEmergencyContact}
          />
          <MultipleInputBox
            label="Language"
            values={language}
            setValues={setLanguage}
          />
          <MultipleInputBox
            label="Disease"
            values={disease}
            setValues={setDisease}
          />
          <View style={Style.horizontalWrap}>
            <Text
              style={Style.cancelButton}
              onPress={() => {
                toggleVisible(false);
              }}>
              Cancel
            </Text>
            <Text
              style={Style.confirmButton}
              onPress={() => {
                console.log(allergy);
              }}>
              Confirm
            </Text>
          </View>
        </ScrollView>
      </Modal>
    </>
  );
};

type InputBoxProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: Function;
};

const InputBox = ({label, placeholder, value, onChange}: InputBoxProps) => {
  return (
    <View style={{...Style.horizontalWrap, ...Style.botMargin}}>
      <Text style={Style.inputLabel}>{label}: </Text>
      <View style={Style.inputWrap}>
        <TextInput
          style={Style.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={(newValue) => {
            onChange(newValue);
          }}
        />
      </View>
    </View>
  );
};

type MultipleInputBox = {
  label: string;
  values: {nextId: number; list: Array<{id: number; value: string}>};
  setValues: Function;
};

const MultipleInputBox = ({label, values, setValues}: MultipleInputBox) => {
  const {nextId, list} = values;

  const onAdd = () => {
    let existEmptyValue = list.some((element) => {
      return element.value === '';
    });

    // Prevent adding new inputbox if exist inputbox with empty value
    if (existEmptyValue) {
      return;
    }

    setValues({
      nextId: values.nextId + 1,
      list: [...list, {id: nextId, value: ''}],
    });
  };

  return (
    <View style={{...Style.horizontalWrap, ...Style.botMargin}}>
      <Text style={{...Style.inputLabel, ...Style.multipleInputLabel}}>
        {label}
      </Text>
      <View style={Style.inputWrap}>
        {list.length !== 0 &&
          list.map((element) => {
            return (
              <TextInput
                key={element.id}
                style={Style.textInput}
                value={element.value}
                onChangeText={(newValue) => {
                  setValues({
                    ...values,
                    list: list.map((value) => {
                      if (value.id === element.id) {
                        return {
                          id: value.id,
                          value: newValue,
                        };
                      }
                      return value;
                    }),
                  });
                }}
              />
            );
          })}
        <Feather
          name="plus"
          size={20}
          color={CuraColor.Green}
          style={Style.addButton}
          onPress={() => {
            onAdd();
          }}
        />
      </View>
    </View>
  );
};

const listMapping = (value: string, index: number) => {
  return {
    id: index,
    value,
  };
};

const Style = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  horizontalWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    flex: 2,
    alignSelf: 'center',
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    paddingLeft: 15,
    marginBottom: 5,
  },
  inputWrap: {
    flex: 5,
  },
  botMargin: {
    marginBottom: 10,
  },
  multipleInputLabel: {
    alignSelf: 'flex-start',
  },
  addButton: {
    padding: 5,
    marginBottom: 10,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: CuraColor.Green,
  },
  cancelButton: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'red',
    marginVertical: 25,
    borderRadius: 10,
  },
  confirmButton: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: CuraColor.Green,
    marginVertical: 25,
    borderRadius: 10,
  },
});

export default EditInfoModal;
