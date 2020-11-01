import Firebase from '../../util/firebase';
import {PersonalInfoType} from './PersonalInfoType';

export const retrievePersonalInformation = async () => {
  const userRef = Firebase.firestore()
    .collection('users')
    .doc(Firebase.auth().currentUser?.uid);

  const user = await userRef.get();
  const data = user.data();
  const drugList: any[] = [];
  const tempWeightArray = data?.weight;
  let sortedWeightArray;

  sortedWeightArray = tempWeightArray.sort((a: any, b: any) => {
    return a.value - b.value;
  });

  data?.longTermMed.map((prescObject: any) => {
    prescObject.medicines.map((medicine: any) => {
      drugList.push(medicine);
    });
  });

  if (data) {
    return {
      age: calculateAge(data.birthdate.seconds),
      bloodType: data.bloodType,
      weight: sortedWeightArray[0],
      height: data.height,
      allergy: data.allergy,
      disability: data.disabilities,
      emergencyContact: data.emergencyContact,
      language: data.language,
      disease: data.disease,
      longTermMed: drugList,
      shortTermMed: data.shortTermMed.medicine,
      selfAddedLongTermMed: data.selfAddedLongTermMed,
    };
  } else {
    return {
      age: -1,
      bloodType: '',
      weight: '',
      height: '',
      allergy: '',
      disability: '',
      emergencyContact: '',
      language: '',
      disease: '',
      longTermMed: [],
      shortTermMed: [],
      selfAddedLongTermMed: [],
    };
  }
};

export const updatePersonalInformation = async (
  updatedInfo: PersonalInfoType,
) => {
  const userRef = Firebase.firestore()
    .collection('users')
    .doc(Firebase.auth().currentUser?.uid);

  const userDoc = await userRef.get();

  const weightArray = userDoc.data()?.weight;

  weightArray.push(updatedInfo.weight);

  const toBeSubmitted = {
    bloodType: updatedInfo.bloodType,
    weight: weightArray,
    height: updatedInfo.height,
    allergy: updatedInfo.allergy,
    disabilities: updatedInfo.disability,
    emergencyContact: updatedInfo.emergencyContact,
    language: updatedInfo.language,
    disease: updatedInfo.disease,
    selfAddedLongTermMed: updatedInfo.selfAddedLongTermMed,
  };

  userRef.update(toBeSubmitted);
};

const calculateAge = (birthDateObjectSeconds: number) => {
  const birthDateObject = new Date(1970, 0, 1);
  birthDateObject.setSeconds(birthDateObjectSeconds);
  const todayDate = new Date();
  const birthdate: number = birthDateObject.getDate();
  const birthmonth: number = birthDateObject.getMonth() + 1;
  const birthyear: number = birthDateObject.getFullYear();

  let roughAgeYear = todayDate.getFullYear() - birthyear - 1;

  if (birthmonth === todayDate.getMonth() + 1) {
    if (birthdate >= todayDate.getDate()) {
      roughAgeYear += 1;
    }
  } else if (todayDate.getMonth() + 1 > birthmonth) {
    roughAgeYear += 1;
  }

  return roughAgeYear;
};
