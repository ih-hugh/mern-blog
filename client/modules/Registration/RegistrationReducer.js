// Import Actions
import { AUTHENTICATE_USER, LOGOUT, AUTH_ERROR } from './RegistrationActions';

// Initial State
const initialState = {
  isAuthenticated: false,
  registrationError: null,
};

const RegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return Object.assign({}, state, {
        isAuthenticated: true,
        registrationError: null,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        registrationError: null,
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        registrationError: action.registrationError,
      });
    default:
      return state;
  }
};

export const getAuthenticatedStatus = state => state.registration.isAuthenticated;
export const getRegistrationError = state => state.registration.registrationError;

export default RegistrationReducer;
