import {LoginDetail, LOGIN, UserActionTypes, LOGOUT} from './types';

export function loginUser(loginDetail: LoginDetail): UserActionTypes {
  return {
    type: LOGIN,
    payload: loginDetail,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT,
  };
}
