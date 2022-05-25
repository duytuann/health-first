import authSaga from 'modules/auth/saga';
import certificateSaga from 'modules/certificate/saga';
import facilitiesSaga from 'modules/facilities/saga';
import planSaga from 'modules/plan/saga';
import userSaga from 'modules/user/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([authSaga(), facilitiesSaga(), userSaga(), planSaga(), certificateSaga()]);
}
