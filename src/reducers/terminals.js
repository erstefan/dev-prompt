// import * as types from "../constants/actionTypes";
//
// export default (state = {
//   pending: false,
//   data: [],
//   error: ''
// }, action) => {
//   switch (action.type) {
//     case types.TERMINALS_SUCCESS:
//       return {
//         pending: false,
//         data: [...action.payload]
//       };
//
//     case types.TERMINAL_REQUEST:
//       return {
//         ...state,
//         pending: true,
//       };
//
//     case types.TERMINAL_DELETE_REQUEST:
//       return {
//         ...state,
//         pending: true,
//       };
//     case types.TERMINAL_DELETE_SUCCESS:
//       return {
//         ...state,
//         data: state.data.filter(terminal => terminal.key !== action.payload)
//       };
//
//
//     case types.TERMINAL_ADD_REQUEST:
//       return {
//         ...state,
//         pending: true,
//       };
//     case types.TERMINAL_ADD_SUCCESS:
//       return {
//         pending: false,
//         ...state
//       };
//
//     case types.TERMINAL_NEW_REQUEST:
//       return {
//         ...state,
//         pending: true
//       };
//
//     case types.TERMINAL_NEW_REQUEST_SUCCESS:
//       return {
//         pending: false,
//         ...state
//       };
//     default:
//       return state;
//   }
// };