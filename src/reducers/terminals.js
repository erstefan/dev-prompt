import {
  TERMINALS_FETCH_REQUEST,
  TERMINALS_FETCH_SUCCESS,
  TERMINAL_REMOVE_SUCCESS,
  TERMINAL_ADD_REQUEST,
  TERMINAL_ADD_SUCCESS,
  TERMINAL_ADD_FAILURE,
  TERMINALS_FETCH_FAILURE,
} from "../constants/actionTypes";

export default (
  state = {
    pending: false,
    data: [],
    error: "",
  },
  action,
) => {
  switch (action.type) {
    case TERMINALS_FETCH_REQUEST:
      return { ...state, pending: true };

    case TERMINALS_FETCH_SUCCESS:
      return { pending: false, data: action.payload.terminals, ...state };

    case TERMINALS_FETCH_FAILURE:
      return { ...state, pending: false, error: action.payload.error };

    case TERMINAL_REMOVE_SUCCESS:
      return {
        ...state,
        data: state.data.splice(action.payload.terminalIndex, 1),
      };

    case TERMINAL_ADD_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case TERMINAL_ADD_SUCCESS:
      console.log('TERMINAL__ADD__SUCCESS', action)
      return {
        ...state,
        pending: false,
        data: [...state.data, ...action.payload.terminals],
      };
    case TERMINAL_ADD_FAILURE:
      return { ...state, pending: false, error: action.payload.error };

    // case types.TERMINAL_NEW_REQUEST:
    //   return {
    //     ...state,
    //     pending: true
    //   };

    // case types.TERMINAL_NEW_REQUEST_SUCCESS:
    //   return {
    //     pending: false,
    //     ...state
    //   };
    default:
      return state;
  }
};
