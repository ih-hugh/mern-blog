// Import Actions
import { AUTHENTICATE_USER, LOGOUT, AUTH_ERROR, SET_USER, ADD_POSTS, GET_USER } from './AppActions';

// Initial State
const initialState = {
  isAuthenticated: false,
  error: null,
  user: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return Object.assign({}, state, {
        isAuthenticated: true,
        error: null,
      });

    case ADD_POSTS:
      return {
        data: action.posts,
      };

    case LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        error: null,
      });

    case AUTH_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case SET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getAuthenticatedStatus = state => state.app.isAuthenticated;
export const getError = state => state.app.error;
export const getUser = state => state.app.user;
export const getPosts = state => state.app.data;

// Export Reducer
export default AppReducer;
