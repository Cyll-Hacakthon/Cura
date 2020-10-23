import Firebase from '../../util/firebase';

export type DataAccessObjectType = {
  date: Firebase.firestore.Timestamp;
  doctor: string;
  reportAccessed: Array<string>;
  type: 'access' | 'edit';
};

export const retrieveDataAccessHistory = async (): Promise<
  DataAccessObjectType[]
> => {
  const userId = Firebase.auth().currentUser?.uid;
  const userRef = await Firebase.firestore()
    .collection('users')
    .doc(userId)
    .get();

  const userData = userRef.data();

  const result = userData?.dataAccessHistory.map((data: any) => {
    return {
      date: data.date,
      doctor: data.doctor,
      reportAccessed: data.reportAccessed,
      type: data.type,
    };
  });

  if (userData) {
    return result;
  } else {
    return [];
  }
};

export const formatTimestamp = (timestamp: Date) => {
  const date = timestamp.getDate();
  const month = timestamp.toDateString().split(' ')[1];
  const year = timestamp.getFullYear();

  return `${date} ${month} ${year}`;
};

export const retrieveMedicalReport = async (reportIds: string[]) => {
  let result: {
    id: string;
    createdAt: string;
    doctorName: string;
    hospital: string;
    rx: string;
    specialist: string;
    title: string;
    assessment: string;
  }[] = [];

  let docsRef = await Firebase.firestore()
    .collection('medicalReport')
    .where('id', 'in', reportIds)
    .get();

  docsRef.forEach((document) => {
    const data = document.data();

    result.push({
      id: document.id,
      createdAt: formatTimestampFull(data.createdAt.toDate()),
      doctorName: data.doctorName,
      hospital: data.hospital,
      rx: data.rx,
      specialist: data.specialist,
      title: data.title,
      assessment: data.assessment,
    });
  });

  return result;
};

const formatTimestampFull = (timestamp: Date) => {
  const timestampHour = timestamp.getHours();
  const timestampMinute = timestamp.getMinutes();

  const date = timestamp.getDate();
  const month = timestamp.toDateString().split(' ')[1];
  const year = timestamp.getFullYear();
  const hour = timestampHour > 12 ? timestampHour - 12 : timestampHour;
  const minute = timestampMinute < 10 ? `0${timestampMinute}` : timestampMinute;

  const ampm = timestampHour > 11 ? 'pm' : 'am';

  return `${date} ${month} ${year} ${hour}:${minute} ${ampm}`;
};
