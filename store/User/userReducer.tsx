import {UserState, UserActionTypes, LOGIN} from './types';

const initialUserState: UserState = {
  isLoggedIn: false,
  email: 'test',
  name: '',
};

const UserReducer = (state = initialUserState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload); // testing
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        name: 'John Doe',
      };
    default:
      return state;
  }
};

export default UserReducer;
