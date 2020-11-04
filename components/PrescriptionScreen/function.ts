import Firebase from '../../util/firebase';

export type PrescriptionType = {
  dueDate: Firebase.firestore.Timestamp;
  hospital: string;
  limit: number;
  medicine: string[];
  title: string;
  takenToday: boolean;
  id: string;
};

export const getPrescriptionInfo = async (setPrescriptionList: Function) => {
  const userId = Firebase.auth().currentUser?.uid;

  const todayDate = new Date();
  todayDate.setMinutes(0);
  todayDate.setSeconds(0);
  todayDate.setMilliseconds(0);

  let takenPrescription: {
    date: Firebase.firestore.Timestamp;
    ids: string[];
  };

  Firebase.firestore()
    .collection('users')
    .doc(userId)
    .onSnapshot((docSnap) => {
      let prescriptionData = docSnap.data()?.longTermMed;
      takenPrescription = docSnap.data()?.prescriptionTaken;

      const takenDate = takenPrescription.date.toDate();

      const isSameDate = todayDate.toDateString() === takenDate.toDateString();

      if (isSameDate) {
        prescriptionData = prescriptionData.map((presc: any) => {
          const isTaken = takenPrescription.ids.some((value) => {
            return value === presc.id;
          });

          return {
            ...presc,
            takenToday: isTaken,
          };
        });
      } else {
        prescriptionData = prescriptionData.map((presc: any) => {
          return {
            ...presc,
            takenToday: false,
          };
        });
        resetDatabasePrescriptionTaken();
      }

      setPrescriptionList(prescriptionData);
    });
};

const resetDatabasePrescriptionTaken = async () => {
  const userId = Firebase.auth().currentUser?.uid;

  const todayDate = new Date();
  todayDate.setMinutes(0);
  todayDate.setSeconds(0);
  todayDate.setMilliseconds(0);

  const newPrescriptionTakenObject = {
    date: Firebase.firestore.Timestamp.fromDate(todayDate),
    ids: [],
  };

  await Firebase.firestore().collection('users').doc(userId).update({
    prescriptionTaken: newPrescriptionTakenObject,
  });
};

export const updateDatabasePrescriptionTaken = async (id: string) => {
  const userId = Firebase.auth().currentUser?.uid;

  const userRef = await Firebase.firestore()
    .collection('users')
    .doc(userId)
    .get();

  const prescriptionTakenObject = userRef.data()?.prescriptionTaken;

  const newPrescriptionTakenObject = {
    ...prescriptionTakenObject,
    ids: [...prescriptionTakenObject.ids, id],
  };

  //console.log(newPrescriptionTakenObject);
  updatePrescriptionTakingLimit(id);

  Firebase.firestore().collection('users').doc(userId).update({
    prescriptionTaken: newPrescriptionTakenObject,
  });
};

export const updatePrescriptionTakingLimit = async (id: string) => {
  const userId = Firebase.auth().currentUser?.uid;

  const userRef = await Firebase.firestore()
    .collection('users')
    .doc(userId)
    .get();

  const longTermMed = userRef.data()?.longTermMed;

  const tempLongTermMed = longTermMed.filter((med: any) => {
    return med.id !== id;
  });
  const selectedPrescriptionObject = longTermMed.filter((med: any) => {
    return med.id === id;
  })[0];

  selectedPrescriptionObject.limit -= 1;

  const result = [...tempLongTermMed, selectedPrescriptionObject];

  console.log(result);
  Firebase.firestore().collection('users').doc(userId).update({
    longTermMed: result,
  });
};
