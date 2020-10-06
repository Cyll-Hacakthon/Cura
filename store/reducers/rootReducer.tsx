import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import UserReducer from '../User/userReducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
