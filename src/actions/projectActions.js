import {
  PROJECTS_GET_SINGLE,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_REQUEST,
  PROJECTS_SUCCESS,
  PROJECTS_REQUEST,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAILURE,
  TERMINAL_ADD_SUCCESS,
  TERMINAL_REMOVE,
} from '../constants/actionTypes'
import { auth, db } from '../firebase/firebase'
import { snapshotToArray } from '../utils'

/*************************************************
 *
 * Get project(s)
 */

export const projectsGetAllRequest = () => ({
  type: PROJECTS_REQUEST,
})

export const projectsGetSuccess = projects => ({
  type: PROJECTS_SUCCESS,
  payload: projects,
})

export const getSingleProject = id => ({
  type: PROJECTS_GET_SINGLE,
  payload: {
    id,
  },
})

/**
 * Retrieve all projects
 */
export const getAllProjects = () => dispatch => {
  dispatch(projectsGetAllRequest())
  let uid = auth.currentUser !== null && auth.currentUser.uid
  const ref = db.ref(`/projects/${uid}`)
  ref.once('value', snapshot => {
    let data = snapshot.val()

    if (!data) {
      return dispatch(projectsGetSuccess([]))
    }

    let formattedData = snapshotToArray(snapshot)
    return dispatch(projectsGetSuccess(formattedData))
  })
}

/*************************************************
 *
 * Create project
 */
export const createProjectRequest = () => ({
  type: PROJECT_ADD_REQUEST,
})

export const createProjectSuccess = project => ({
  type: PROJECT_ADD_SUCCESS,
  payload: project
})

/**
 * Create new project
 * @param data
 */
export const createProject = data => dispatch => {
  dispatch(createProjectRequest())
  let uid = auth.currentUser !== null && auth.currentUser.uid
  let project = { uid, ...data, terms: [], createAt: Date.now() }

  db.ref(`/projects/${uid}`)
    .push({ ...project })
    .then(async snapshot => {
      project.key = await snapshot.key;
      return dispatch(createProjectSuccess(project))
    })
    .catch(err => {
      console.log('error', err)
    })
}

/*************************************************
 *
 * Delete project
 */
export const deleteProjectRequest = () => ({
  type: PROJECT_DELETE_REQUEST,
})

export const deleteProjectSuccess = id => ({
  type: PROJECT_DELETE_SUCCESS,
  payload: {
    id,
  },
})

export const deleteProjectFailure = err => ({
  type: PROJECT_DELETE_FAILURE,
  payload: {
    err,
  },
})

export const deleteProject = id => dispatch => {
  dispatch(deleteProjectRequest())

  const uid = auth.currentUser !== null && auth.currentUser.uid

  return new Promise((resolve, reject) => {
    db.ref(`/projects/${uid}`)
      .child(id)
      .remove()
      .then(() => {
        setTimeout(() => {
          dispatch(deleteProjectSuccess(id))
          resolve()
        }, 500)

      })
      .catch(err => {
        dispatch(deleteProjectFailure(err))
        reject(err)
      })
  })

}
