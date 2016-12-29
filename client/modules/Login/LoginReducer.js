// Import Actions
import { AUTHENTICATE_USER, AUTH_ERROR, SET_USER } from './LoginActions';

// Initial State
const initialState = {
  isAuthenticated: false,
  loginError: null,
  user: null,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return Object.assign({}, state, {
        isAuthenticated: true,
        loginError: null,
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError,
      });
    case SET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
      return state;
  }
};

export const getAuthenticatedStatus = state => state.login.isAuthenticated;
export const getLoginError = state => state.login.loginError;

export default LoginReducer;
