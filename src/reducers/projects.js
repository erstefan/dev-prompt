import {
  PROJECT_ADD_REQUEST, PROJECT_ADD_SUCCESS, PROJECT_DELETE,
  PROJECTS_GET_SINGLE, PROJECTS_REQUEST, PROJECTS_SUCCESS
} from "../constants/actionTypes";

export default (state = {
  pending: false,
  data: []
}, action) => {
  switch (action.type) {
    case PROJECTS_SUCCESS:
      return {
        pending: false,
        data: [...action.payload]
      };

    case PROJECTS_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case PROJECTS_GET_SINGLE:
      console.log('action', action);
      return state.projects[0];

    case PROJECT_DELETE:
      console.log('action', action);
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      };

    case PROJECT_ADD_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case PROJECT_ADD_SUCCESS:
      return {
        pending: false,
        ...state
      };
    default:
      return state;
  }
};