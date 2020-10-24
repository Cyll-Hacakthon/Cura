import Firebase from '../../util/firebase';

export const getFollowUpData = async () => {
  const userId = Firebase.auth().currentUser?.uid;

  const userRef = await Firebase.firestore()
    .collection('users')
    .doc(userId)
    .get();

  const data = userRef.data();

  return data?.followUp;
};
