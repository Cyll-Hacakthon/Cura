import Firebase from '../../util/firebase';

export type NotificationType = {
  category: string;
  content: string;
  sender: string;
  timestamp: Firebase.firestore.Timestamp;
  title: string;
};

type UserType = {
  address: string;
  birthdate: Firebase.firestore.Timestamp;
  email: string;
  gender: string;
  ic: string;
  id: string;
  name: string;
  notification: Array<NotificationType>;
  role: string;
};

export const getNotificationList = async (): Promise<
  NotificationType[] | null
> => {
  const UserRef = Firebase.firestore()
    .collection('users')
    .doc(Firebase.auth().currentUser?.uid);

  const user = await UserRef.get();
  const userData = user.data();
  if (userData) {
    return userData.notifications;
  }
  return null;
};

export const formatTimestamp = (timestamp: Date) => {
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
