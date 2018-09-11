import {PROJECT_ADD_SUCCESS, PROJECT_DELETE, PROJECTS_GET_ALL, PROJECTS_GET_SINGLE} from "../constants/actionTypes";

export default (state = {
  projects: [
    {
      id: "fbe0d188-d70b-4447-93b9-8ac6e8916ffb",
      name: "TermDocker",
      path: "/Users/stefan/Documents/TermDocker"
    }
  ]
}, action) => {
  switch (action.type) {
    case PROJECTS_GET_ALL:
      return {
        projects: state.projects,
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

    case PROJECT_ADD_SUCCESS:
      return {
        projects: [...state.projects, action.payload.project]
      };
    default:
      return state;
  }
};