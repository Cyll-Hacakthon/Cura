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
