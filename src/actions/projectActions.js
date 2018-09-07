import {PROJECTS_GET_ALL, PROJECTS_GET_SINGLE, PROJECT_ADD_SUCCESS, PROJECT_DELETE} from "../constants/actionTypes";

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

export const deleteProject = id => ({
  type: PROJECT_DELETE,
  payload: {
    id
  }
});