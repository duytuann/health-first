import { combineReducers } from 'redux';
import authReducer from 'modules/auth/redux';
import themeReducer from 'themes/redux';

export default combineReducers({
  theme: themeReducer,
  auth: authReducer,
});
