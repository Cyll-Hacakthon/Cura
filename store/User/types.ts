export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const TAKE_NUMBER = 'TAKE_NUMBER';
export const CANCEL_NUMBER = 'CANCEL_NUMBER';

export interface UserState {
  isLoggedIn: boolean;
  email: string;
  name: string;
  takenNumber: boolean;
}

export interface LoginDetail {
  email: string;
  name: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: {
    email: string;
    name: string;
  };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface TakeNumberAction {
  type: typeof TAKE_NUMBER;
}

interface CancelNumberAction {
  type: typeof CANCEL_NUMBER;
}

export type UserActionTypes =
  | LoginAction
  | LogoutAction
  | TakeNumberAction
  | CancelNumberAction;
