import {PROJECTS_GET_ALL, PROJECTS_GET_SINGLE, PROJECT_ADD_SUCCESS} from "../constants/actionTypes";

export const getAllProjects = () => ({
  type: PROJECTS_GET_ALL
});

export const getSingleProject = id => ({
  type: PROJECTS_GET_SINGLE,
  payload: {
    id
  }
});

export const importProject = project => ({
  type: PROJECT_ADD_SUCCESS,
  payload: {
    project
  }
});