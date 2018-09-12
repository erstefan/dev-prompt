import {
  PROJECTS_GET_SINGLE, PROJECT_ADD_SUCCESS, PROJECT_DELETE,
  PROJECT_ADD_REQUEST, PROJECTS_SUCCESS, PROJECTS_REQUEST
} from "../constants/actionTypes";
import {auth, db} from "../firebase/firebase";
import {snapshotToArray} from "../utils";

/*************************************************
 *
 * Get project(s)
 */

export const projectsGetAllRequest = () => ({
  type: PROJECTS_REQUEST
});

export const projectsGetSuccess = projects => ({
  type: PROJECTS_SUCCESS,
  payload: projects
});

export const getSingleProject = id => ({
  type: PROJECTS_GET_SINGLE,
  payload: {
    id
  }
});

/*************************************************
 *
 * Create project
 */
export const createProjectRequest = () => ({
  type: PROJECT_ADD_REQUEST,
});

export const createProjectSuccess = () => ({
  type: PROJECT_ADD_SUCCESS,
});

export const deleteProject = id => ({
  type: PROJECT_DELETE,
  payload: {
    id
  }
});


/**
 * Create new project
 * @param data
 */
export const createProject = data => dispatch => {
  dispatch(createProjectRequest());
  let uid = auth.currentUser !== null && auth.currentUser.uid;
  let project = {uid, ...data, createAt: Date.now()};

  db
    .ref(`/projects/${uid}`)
    .push({...project})
    .then(() => {
      dispatch(createProjectSuccess(project))
    })
    .catch(err => {
      console.log('error', err);
    })
};

/**
 * Retrieve all projects
 */
export const getAllProjects = () => dispatch => {
  dispatch(projectsGetAllRequest());
  let uid = auth.currentUser !== null && auth.currentUser.uid;
  db
    .ref(`/projects/${uid}`)
    .on('value', snapshot => {
      let data = snapshot.val();

      if (!data) {
        return dispatch(projectsGetSuccess([]));
      }

      let formattedData = snapshotToArray(snapshot);
      return dispatch(projectsGetSuccess(formattedData));
    })
};