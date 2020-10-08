import {actionTypes} from 'redux-firestore';
import {UserState, UserActionTypes, LOGIN, LOGOUT} from './types';

const initialUserState: UserState = {
  isLoggedIn: false,
  email: '',
  name: '',
};

const UserReducer = (state = initialUserState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        name: action.payload.email.split('@')[0], // Should retrieve from database
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        email: '',
        name: '',
      };
    default:
      return state;
  }
};

export default UserReducer;
