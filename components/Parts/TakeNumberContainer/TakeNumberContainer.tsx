import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CuraColor} from '../../../util';
import Firebase from '../../../util/firebase';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../../store/reducers/rootReducer';

import TakeNumberScreen from '../../takeNumberScreen/TakeNumberScreen';
import QueueInformationScreen from '../../QueueInformationScreen/QueueInformationScreen';
import NumberInformationScreen from '../../NumberInformationScreen/NumberInformationScreen';

const Stack = createStackNavigator();

type PropsFromRedux = ConnectedProps<typeof connector>;

const TakeNumberContainer = (props: PropsFromRedux) => {
  useEffect(() => {
    const checkTakenNumber = async () => {
      const userId = Firebase.auth().currentUser?.uid;

      await Firebase.firestore()
        .collection('queue')
        .where('patientId', '==', userId)
        .onSnapshot((docSnapshot) => {
          if (docSnapshot.empty) {
            props.cancelNumber();
          } else {
            props.takeNumber();
          }
        });
    };
    checkTakenNumber();
  }, [props]);

  return (
    <Stack.Navigator initialRouteName="Take Number">
      {props.takenNumber ? (
        <Stack.Screen
          name="Number Information"
          component={NumberInformationScreen}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="Take Number"
            component={TakeNumberScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Queue Information"
            component={QueueInformationScreen}
            options={{
              headerTitle: '',
              headerTintColor: CuraColor.White,
              headerBackTitleVisible: true,
              headerBackTitle: 'Back',
              headerTransparent: true,
              headerStatusBarHeight: 15,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

// const checkQueue = async () => {
//   const userId = Firebase.auth().currentUser?.uid;

//   const queueRef = await Firebase.firestore()
//     .collection('queue')
//     .where('patientId', '==', userId)
//     .onSnapshot((docSnapshot) => {
//       if(docSnapshot.empty) {

//       }
//     });

// };

const mapState = (state: RootState) => {
  return {
    takenNumber: state.user.takenNumber,
  };
};

const mapDispatch = {
  takeNumber: () => ({
    type: 'TAKE_NUMBER',
  }),
  cancelNumber: () => ({
    type: 'CANCEL_NUMBER',
  }),
};

const connector = connect(mapState, mapDispatch);

export default connector(TakeNumberContainer);
