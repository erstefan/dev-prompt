import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants/actionTypes';

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