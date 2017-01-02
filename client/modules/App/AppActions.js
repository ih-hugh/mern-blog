import firebase from 'firebase';
import { browserHistory } from 'react-router';
import callApi from '../../util/apiCaller';

// Export Constants
export const SET_USER = 'SET_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGOUT = 'LOGOUT';
export const ADD_POST = 'ADD_POST';

// Export Actions
export function authenticateUser() {
  return {
    type: AUTHENTICATE_USER,
  };
}

export function logUserOut() {
  firebase.auth().signOut();

  browserHistory.push('/');
  return {
    type: LOGOUT,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    error,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        username: post.username,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function verifyAuth() {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user));
        return dispatch(authenticateUser());
      }
      return dispatch(logUserOut());
    });
  };
}
