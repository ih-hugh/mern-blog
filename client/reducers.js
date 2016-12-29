/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import blog from './modules/Blog/BlogReducer';
import intl from './modules/Intl/IntlReducer';
import login from './modules/Login/LoginReducer';
import registration from './modules/Registration/RegistrationReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  blog,
  intl,
  login,
  registration,
});
