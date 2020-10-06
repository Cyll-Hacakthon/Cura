import {LoginDetail, LOGIN, UserActionTypes} from './types';

export function loginUser(loginDetail: LoginDetail): UserActionTypes {
  return {
    type: LOGIN,
    payload: loginDetail,
  };
}
