import authSaga from 'modules/auth/saga';
import facilitiesSaga from 'modules/facilities/saga';
import userSagaa from 'modules/user/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([authSaga(), facilitiesSaga(), userSagaa()]);
}
