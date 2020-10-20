import Firebase from '../../util/firebase';

type QueueInformationType = {
  queueId: string;
  hospital: string;
  hospitalAddress: string;
  patientName: string;
  visitPurpose: string;
  specialist: string;
  doctor: string;
  patientNumber: string;
  currentNumber: string;
  arriveTime: string;
};

export const getQueueInformation = async (): Promise<QueueInformationType> => {
  const userId = Firebase.auth().currentUser?.uid;

  const queueDoc = await Firebase.firestore()
    .collection('queue')
    .where('patientId', '==', userId)
    .get();

  const data = queueDoc.docs[0].data();

  const queueDateObject = data.arrivalTime.toDate();

  return {
    queueId: queueDoc.docs[0].id,
    hospital: data.hospital,
    hospitalAddress: data.hospitalAddress,
    patientName: data.patientName,
    visitPurpose: data.visitPurpose,
    specialist: data.specialist,
    doctor: data.doctor,
    patientNumber: data.patientNumber,
    currentNumber: data.currentNumber,
    arriveTime: formatTimestamp(queueDateObject),
  };
};

const formatTimestamp = (timestamp: Date) => {
  const timestampHour = timestamp.getHours();
  const timestampMinute = timestamp.getMinutes();

  const hour = timestampHour > 12 ? timestampHour - 12 : timestampHour;
  const minute = timestampMinute < 10 ? `0${timestampMinute}` : timestampMinute;

  const ampm = timestampHour > 11 ? 'pm' : 'am';

  return `${hour}:${minute} ${ampm}`;
};

export const cancelQueue = async (queueId: string) => {
  await Firebase.firestore().collection('queue').doc(queueId).delete();
};
