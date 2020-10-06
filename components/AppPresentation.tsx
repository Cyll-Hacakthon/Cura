import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../store/reducers/rootReducer';

import NavContainer from '../components/Parts/NavContainer/NavContainer';
import AuthContainer from '../components/Auth/AuthContainer/AuthContainer';

type PropsFromRedux = ConnectedProps<typeof connector>;

type AppPresentationProps = PropsFromRedux & {};

const AppPresentation = (props: AppPresentationProps) => {
  return props.isLoggedIn ? <NavContainer /> : <AuthContainer />;
};
const mapState = (state: RootState) => {
  return {isLoggedIn: state.user.isLoggedIn};
};

const connector = connect(mapState);

export default connector(AppPresentation);
