
import firebase from 'firebase';
import { browserHistory } from 'react-router';
// Export Constants
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SET_USER = 'SET_USER';

export function authenticateUser() {
  return {
    type: AUTHENTICATE_USER,
  };
}

export function authError(loginError) {
  return {
    type: AUTH_ERROR,
    loginError,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function fetchSignedInUser() {
  const user = firebase.auth().currentUser;
  return dispatch => dispatch(setUser(user));
}

export function logUserIn(credentials) {
  return dispatch => {
    const username = credentials.username;
    const password = credentials.password;
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((user) => {
        dispatch(setUser(user));
        dispatch(authenticateUser());
        browserHistory.push('/');
      })
      .catch(loginError => {
        dispatch(authError(loginError));
      });
  };
}

