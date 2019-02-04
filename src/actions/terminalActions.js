import { auth, db } from "../firebase/firebase";
import { snapshotToArray } from "../utils";
import {
  TERMINAL_REMOVE_REQUEST,
  TERMINAL_REMOVE_SUCCESS,
  TERMINAL_REMOVE_FAILURE,
  TERMINAL_ADD_REQUEST,
  TERMINAL_ADD_SUCCESS,
  TERMINALS_FETCH_REQUEST,
  TERMINALS_FETCH_SUCCESS,
  TERMINALS_FETCH_FAILURE,
} from "../constants/actionTypes";

/*************************************************
 *
 * Fetch terminals
 */

export const terminalsFetchRequest = () => ({
  type: TERMINALS_FETCH_REQUEST,
});

export const terminalsFetchSuccess = terminals => ({
  type: TERMINALS_FETCH_SUCCESS,
  payload: {
    terminals,
  },
});

export const terminalFetchFailure = error => ({
  type: TERMINALS_FETCH_FAILURE,
  payload: {
    error,
  },
});

export const fetchTerminals = projectId => dispatch => {
  dispatch(terminalsFetchRequest());
  db.ref(`/terminals/${projectId}/terms`).once("value", snap => {
    if (snap) {
      // console.log('SNAP', snap.val())
      let formatted = snapshotToArray(snap);
      return dispatch(terminalAddSuccess(formatted));
    }

    dispatch(terminalFetchFailure({ message: "Something went wrong." }));
  });
};

/*************************************************
 *
 * Remove terminals
 */

export const terminalRemoveRequest = () => ({
  type: TERMINAL_REMOVE_REQUEST,
  payload: {},
});

export const terminalRemoveSuccess = terminals => ({
  type: TERMINAL_REMOVE_SUCCESS,
  payload: {
    terminals,
  },
});

export const terminalRemoveFailure = error => ({
  type: TERMINAL_REMOVE_FAILURE,
  payload: {
    error,
  },
});

export const removeTerminal = (projectId, index) => dispatch => {
  dispatch(terminalRemoveRequest());

  console.log('removing', projectId, index);
  
  db.ref(`/terminals/${projectId}/terms/${index}`)
    .remove()
    .then(res => {
      console.log("remove success terminal", res);
      db.once("child_removed").then(snapshot => {
        console.log("child_removed cb", snapshot.val());

        let formatted = snapshotToArray(snapshot);
        dispatch(terminalRemoveSuccess(formatted));
      });
    })
    .catch(err => {
      dispatch(terminalRemoveFailure(err));
    });
};

/**
 * Add new command / terminal
 */

export const terminalAddRequest = () => ({
  type: TERMINAL_ADD_REQUEST,
});

export const terminalAddSuccess = (projectId, terminals) => ({
  type: TERMINAL_ADD_SUCCESS,
  payload: { projectId, terminals },
});

export const addTerminal = (projectId, terminals) => (dispatch, getState) => {
  const { user } = getState();
  const uid = user.user.uid;

  dispatch(terminalAddRequest());
  // dispatch(terminalAddSuccess(projectId, terminals));

  db.ref(`/terminals/${projectId}`)
    .child("terms")
    .push({ ...terminals })
    .then(() => {
      db.ref(`/projects/${uid}`).once("value").then(snapshot => {
        let formatted = snapshotToArray(snapshot);
        console.log('-------------- snapshot')
        console.log(formatted)
        console.log('--------------')
        dispatch(terminalAddSuccess(formatted));
      });
    })
    .catch(err => {
      console.log("error creating new terminals", err);
    });
};
