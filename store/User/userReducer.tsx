import {
  UserState,
  UserActionTypes,
  LOGIN,
  LOGOUT,
  TAKE_NUMBER,
  CANCEL_NUMBER,
} from './types';

const initialUserState: UserState = {
  isLoggedIn: false,
  email: '',
  name: '',
  takenNumber: false,
};

const UserReducer = (state = initialUserState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        name: action.payload.name, // Should retrieve from database
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        email: '',
        name: '',
        takenNumber: false,
      };
    case TAKE_NUMBER:
      return {
        ...state,
        takenNumber: true,
      };
    case CANCEL_NUMBER:
      return {
        ...state,
        takenNumber: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
