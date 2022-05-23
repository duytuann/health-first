import authReducer from 'modules/auth/redux';
import facilitiesReducer from 'modules/facilities/redux';
import userReducer from 'modules/user/redux';
import { combineReducers } from 'redux';
import themeReducer from 'themes/redux';

export default combineReducers({
    theme: themeReducer,
    auth: authReducer,
    facilities: facilitiesReducer,
    user: userReducer,
});
