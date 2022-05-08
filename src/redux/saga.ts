import { all } from 'redux-saga/effects';
import AppGlobalSaga from 'modules/app-global/saga';
import authSaga from 'modules/auth/saga';
import roleGroupSaga from 'modules/role-group/saga';
import topicSaga from '../modules/dashboard/saga';

export default function* rootSaga() {
  yield all([AppGlobalSaga(), authSaga(), roleGroupSaga(), topicSaga()]);
}
