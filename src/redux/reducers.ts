import { combineReducers } from 'redux';
import authReducer from 'modules/auth/redux';
import appGlobalReducer from 'modules/app-global/redux';
import workflowReducer from 'modules/Workflow/redux';
import roleGroupReducer from 'modules/role-group/redux';
import topicReducer from 'modules/dashboard/redux';
import languageRecuder from 'languages/redux';
import themeReducer from 'themes/redux';

export default combineReducers({
  language: languageRecuder,
  theme: themeReducer,
  auth: authReducer,
  appGlobal: appGlobalReducer,
  roleGroup: roleGroupReducer,
  topic: topicReducer,
  workflow: workflowReducer,
});
