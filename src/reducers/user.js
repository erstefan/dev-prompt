import * as actions from '../constants/actionTypes';

const initialState = {
  fetching: false,
  loggedIn: false,
  user: {
    name: '',
    photoURL: '',
    email: ''
  },
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggedIn: true,
        user: {...action.payload}
    };
    case actions.LOGIN_ERROR:
      return {...state, fetching: false, error: action.error};

    case actions.LOGOUT:
      return {
        fetching: false,
        loggedIn: false,
        user: {
          name: '',
          photoURL: '',
          email: ''
        },
        error: ''
      };

    default:
      return state;
  }
};

export default userReducer;