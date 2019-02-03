import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes'
import { auth, db } from '../firebase/firebase'
import * as routes from '../constants/routes'
import { store } from '../store'
import { push } from 'connected-react-router'

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
}

export const logoutRequest = () => ({ type: LOGOUT })

export const logout = history => dispatch => {
  dispatch(logoutRequest())
  auth.signOut().then(() => store.dispatch(push(routes.HOME)))
}

export const loginSuccessResponse = data => {
  return {
    type: LOGIN_SUCCESS,
    payload: { ...data },
  }
}

export const loginUser = (history, user) => dispatch => {
  dispatch(loginRequest())
  if (user) {
    let userData = {
      name: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      emailVerified: user.emailVerified,
      uid: user.uid,
    }
    dispatch(loginSuccessResponse(userData))
  }
}
