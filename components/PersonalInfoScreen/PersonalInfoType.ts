import Firebase from '../../util/firebase';

export type PersonalInfoType = {
  age: number;
  bloodType: {
    value: string;
    verified: boolean;
  };
  weight: {
    value: number;
    lastUpdated: Firebase.firestore.Timestamp;
  };
  height: {
    value: number;
    lastUpdated: Firebase.firestore.Timestamp;
  };
  allergy: Array<string>;
  disability: Array<string>;
  emergencyContact: Array<string>;
  language: Array<string>;
  disease: Array<string>;
  medicineTaken: {
    longTerm: Array<string>;
    recent: Array<string>;
  };
};
