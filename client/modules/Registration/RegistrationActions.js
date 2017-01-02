
import firebase from 'firebase';
import { browserHistory } from 'react-router';
// Export Constants
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGOUT = 'LOGOUT';

export function authenticateUser() {
  return {
    type: AUTHENTICATE_USER,
  };
}

export function authError(registrationError) {
  return {
    type: AUTH_ERROR,
    registrationError,
  };
}

export function signUserUp(credentials) {
  return dispatch => {
    const username = credentials.username;
    const password = credentials.password;
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then(() => {
        browserHistory.push('/');
        dispatch(authenticateUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}

