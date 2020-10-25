import Firebase from '../../util/firebase';

export type PrescriptionType = {
  dueDate: Firebase.firestore.Timestamp;
  hospital: string;
  limit: number;
  medicines: string[];
  title: string;
};

export const getPrescriptionInfo = async (): Promise<PrescriptionType[]> => {
  const userId = Firebase.auth().currentUser?.uid;

  const userRef = await Firebase.firestore()
    .collection('users')
    .doc(userId)
    .get();

  const prescriptionData = userRef.data()?.longTermMed;

  return prescriptionData;
};
