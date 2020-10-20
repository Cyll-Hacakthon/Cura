import Firebase from '../../util/firebase';
import {MedicalReportType} from './MedicalReportType';

export const retrieveMedicalReports = async (): Promise<
  MedicalReportType[]
> => {
  const userId = Firebase.auth().currentUser?.uid;

  const medicalReportsSnapshot = await Firebase.firestore()
    .collection('medicalReport')
    .where('patientId', '==', userId)
    .orderBy('createdAt', 'desc')
    .limit(10)
    .get();

  if (medicalReportsSnapshot.empty) {
    return [];
  }

  const medicalReports: MedicalReportType[] = [];

  medicalReportsSnapshot.forEach((doc) => {
    const data = doc.data();

    medicalReports.push({
      id: doc.id,
      createdAt: formatTimestamp(data.createdAt.toDate()),
      doctorName: data.doctorName,
      hospital: data.hospital,
      rx: data.rx,
      specialist: data.specialist,
      title: data.title,
    });
  });

  return medicalReports;
};

const formatTimestamp = (timestamp: Date) => {
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
