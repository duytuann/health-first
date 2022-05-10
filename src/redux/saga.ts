import { all } from 'redux-saga/effects';
import authSaga from 'modules/auth/saga';
import facilitiesSaga from 'modules/facilities/saga';

export default function* rootSaga() {
  yield all([authSaga(), facilitiesSaga()]);
}
