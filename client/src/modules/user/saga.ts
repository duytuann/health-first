import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getGetListUserApi } from 'core/http/apis/user';
import { postGetListUserStart, postGetListUserSuccess, postGetListUserError } from './redux';

function* postGetListUser(action: ReturnType<typeof postGetListUserStart>) {
    try {
        const res: [] = yield call(getGetListUserApi);
        if (res) {
            yield put({
                type: postGetListUserSuccess.type,
                payload: res,
            });
        }
    } catch (error) {
        yield put({ type: postGetListUserError });
    }
}

function* watchGetListUser() {
    yield takeLatest(postGetListUserStart.type, postGetListUser);
}

export default function* UsersSaga() {
    yield all([watchGetListUser()]);
}
