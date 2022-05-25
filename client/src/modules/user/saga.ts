import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getGetListUserApi, postCreatePlanApi, postUpdatePlanApi, postDeletePlanApi } from 'core/http/apis/user';
import { ResultResponse } from 'core/models/ResultResponse';
import { toast } from 'react-toastify';
import {
    postGetListUserStart,
    postGetListUserSuccess,
    postGetListUserError,
    postCreateUserError,
    postCreateUserStart,
    postCreateUserSuccess,
    postDeleteUserError,
    postDeleteUserStart,
    postDeleteUserSuccess,
    postUpdateUserError,
    postUpdateUserStart,
    postUpdateUserSuccess,
} from './redux';

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
function* postCreateUser(action: ReturnType<typeof postCreateUserStart>) {
    try {
        const res: [] = yield call(postCreatePlanApi, action.payload);
        if (res) {
            yield put({
                type: postCreateUserSuccess.type,
            });
        }
        toast.success('Thêm mới người dùng thành công');
    } catch (error) {
        yield put({ type: postCreateUserError });
        toast.error('Thêm mới người dùng thất bại');
    }
}
function* postUpdateUser(action: ReturnType<typeof postUpdateUserStart>) {
    try {
        yield call(postUpdatePlanApi, action.payload);
        yield put({
            type: postUpdateUserSuccess.type,
        });
        toast.success('Cập nhật người dùng thành công');
    } catch (error) {
        yield put({ type: postUpdateUserError });
        toast.error('Cập nhật người dùng thất bại');
    }
}
function* postDeleteUser(action: ReturnType<typeof postDeleteUserStart>) {
    try {
        yield call(postDeletePlanApi, action.payload);
        yield put({
            type: postDeleteUserSuccess.type,
        });
        toast.success('Xoá người dùng thành công');
    } catch (error) {
        yield put({ type: postDeleteUserError });
        toast.error('Xoá người dùng thất bại');
    }
}
function* watchPostCreateUser() {
    yield takeLatest(postCreateUserStart.type, postCreateUser);
}
function* watchPostUpdateUser() {
    yield takeLatest(postUpdateUserStart.type, postUpdateUser);
}
function* watchPostDeleteUser() {
    yield takeLatest(postDeleteUserStart.type, postDeleteUser);
}

function* watchGetListUser() {
    yield takeLatest(postGetListUserStart.type, postGetListUser);
}

export default function* UsersSaga() {
    yield all([watchGetListUser(), watchPostCreateUser(), watchPostUpdateUser(), watchPostDeleteUser()]);
}
