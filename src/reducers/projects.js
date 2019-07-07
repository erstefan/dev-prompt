import {
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_DELETE_FAILURE,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECTS_GET_SINGLE,
  PROJECTS_REQUEST,
  PROJECTS_SUCCESS,
} from '../constants/actionTypes'

export default (
  state = {
    pending: false,
    data: [],
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case PROJECTS_SUCCESS:
      return {
        pending: false,
        data: [...action.payload],
      }

    case PROJECTS_REQUEST:
      return {
        ...state,
        pending: true,
      }

    case PROJECTS_GET_SINGLE:
      return {
        ...state,
        data: state.data.filter(project => project.key === action.payload.id),
      }

    case PROJECT_DELETE_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case PROJECT_DELETE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: state.data.filter(project => project.key !== action.payload.id),
      }

    case PROJECT_DELETE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      }

    case PROJECT_ADD_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case PROJECT_ADD_SUCCESS:
      console.log('PROJECTS ADD SUCCESS', action);
      return {
        ...state,
        pending: false,
        data: [
          ...state.data,
          ...action.payload
        ]
      }
    default:
      return state
  }
}
