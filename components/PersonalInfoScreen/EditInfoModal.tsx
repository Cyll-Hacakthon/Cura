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
import Firebase from '../../util/firebase';
import {updatePersonalInformation} from './function';

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
  const [bloodType, setBloodType] = useState(info.bloodType.value);
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
  const [medicineLongTerm, setMedicineLongTerm] = useState({
    nextId: info.selfAddedLongTermMed.length,
    list: info.selfAddedLongTermMed.map(listMapping),
  });

  // const [medicineRecent, setMedicineRecent] = useState({
  //   nextId: info.shortTermMed.length,
  //   list: info.shortTermMed.map(listMapping),
  // });

  const listFilterToValue = (element: {id: number; value: string}) => {
    return element.value;
  };

  const processInfo = () => {
    return {
      ...info,
      bloodType: {
        ...info.bloodType,
        value: bloodType,
      },
      weight: {
        value: weight.value,
        lastUpdated:
          info.weight === weight
            ? weight.lastUpdated
            : Firebase.firestore.Timestamp.fromDate(new Date()),
      },
      height: {
        value: height.value,
        lastUpdated:
          info.height === height
            ? height.lastUpdated
            : Firebase.firestore.Timestamp.fromDate(new Date()),
      },
      allergy: allergy.list.map(listFilterToValue),
      disability: disability.list.map(listFilterToValue),
      emergencyContact: emergencyContact.list.map(listFilterToValue),
      language: language.list.map(listFilterToValue),
      disease: disease.list.map(listFilterToValue),
      selfAddedLongTermMed: medicineLongTerm.list.map(listFilterToValue),
      //shortTermMed: medicineRecent.list.map(listFilterToValue),
    };
  };

  const handleSubmitInformation = () => {
    setInfo(processInfo());
    updatePersonalInformation(processInfo());
  };

  return (
    <>
      <Modal visible={visible}>
        <ScrollView style={Style.container}>
          <Text style={Style.title}>Update Personal Information</Text>
          {!info.bloodType.verified && (
            <InputBox
              label="Blood Type"
              placeholder=""
              value={bloodType}
              onChange={(newValue: any) => {
                setBloodType(newValue);
              }}
            />
          )}
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
          <MultipleInputBox
            label="Personal Medicine"
            values={medicineLongTerm}
            setValues={setMedicineLongTerm}
          />
          {/* <MultipleInputBox
            label="Recent Medicine"
            values={medicineRecent}
            setValues={setMedicineRecent}
          /> */}
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
                handleSubmitInformation();
                toggleVisible(false);
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
