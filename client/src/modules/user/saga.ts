import { all, call, put, select, takeLatest } from '@redux-saga/core/effects';
import { getGetListUserApi, postCreatePlanApi, postDeletePlanApi, postUpdatePlanApi } from 'core/http/apis/user';
import { ResultResponse } from 'core/models/ResultResponse';
import { toast } from 'react-toastify';
import { RootState } from 'redux/store';
import {
    postCreateUserError,
    postCreateUserStart,
    postCreateUserSuccess,
    postDeleteUserError,
    postDeleteUserStart,
    postDeleteUserSuccess, postGetListUserError, postGetListUserStart,
    postGetListUserSuccess, postUpdateUserError,
    postUpdateUserStart,
    postUpdateUserSuccess
} from './redux';

function* postGetListUser(action: ReturnType<typeof postGetListUserStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListUserApi, action.payload);
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
    const { searchUser } = yield select((state: RootState) => state.user.data);
    try {
        const res: ResultResponse<any> = yield call(postCreatePlanApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postCreateUserSuccess.type,
            });
            toast.success('Thêm mới người dùng thành công');
            yield put({
                type: postGetListUserStart.type,
                payload: searchUser,
            });
        }
    } catch (error) {
        yield put({ type: postCreateUserError });
        toast.error('Thêm mới người dùng thất bại');
    }
}
function* postUpdateUser(action: ReturnType<typeof postUpdateUserStart>) {
    const { searchUser } = yield select((state: RootState) => state.user.data);
    try {
        const res: ResultResponse<any> = yield call(postUpdatePlanApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postUpdateUserSuccess.type,
            });
            toast.success('Cập nhật người dùng thành công');
            yield put({
                type: postGetListUserStart.type,
                payload: searchUser,
            });
        }
    } catch (error) {
        yield put({ type: postUpdateUserError });
        toast.error('Cập nhật người dùng thất bại');
    }
}
function* postDeleteUser(action: ReturnType<typeof postDeleteUserStart>) {
    const { searchUser } = yield select((state: RootState) => state.user.data);
    try {
        const res: ResultResponse<any> = yield call(postDeletePlanApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postDeleteUserSuccess.type,
            });
            toast.success('Xoá người dùng thành công');
            yield put({
                type: postGetListUserStart.type,
                payload: searchUser,
            });
        }
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
