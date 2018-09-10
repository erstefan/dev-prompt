import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants/actionTypes';

import {
  auth,
  firebase
} from "../firebase/index";
// const Store = require('electron-store');
// const store = new Store();

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccessResponse = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {...data}
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  };
};

export const loginUser = (history, user) => dispatch => {
  dispatch(loginRequest());
  if (user) {
    let userData = {
      name: user.displayName,
      photoURL: user.photoURL,
      email: user.email
    };
    dispatch(loginSuccessResponse(userData))
  }
};