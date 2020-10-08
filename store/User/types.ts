export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export interface UserState {
  isLoggedIn: boolean;
  email: string;
  name: string;
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

export type UserActionTypes = LoginAction | LogoutAction;
