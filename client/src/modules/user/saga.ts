import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getGetListUserApi } from 'core/http/apis/user';
import { ResultResponse } from 'core/models/ResultResponse';
import { postGetListUserStart, postGetListUserSuccess, postGetListUserError } from './redux';

function* postGetListUser(action: ReturnType<typeof postGetListUserStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListUserApi);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListUserSuccess.type,
                payload: res.responseData,
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
