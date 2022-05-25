import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
    getGetListCertificateApi,
    postCreateCertificateApi,
    postDeleteCertificateApi,
    postUpdateCertificateApi,
} from 'core/http/apis/certificates';
import { ResultResponse } from 'core/models/ResultResponse';
import { toast } from 'react-toastify';
import {
    getGetListCertificateError,
    getGetListCertificateStart,
    getGetListCertificateSuccess,
    postCreateCertificateError,
    postCreateCertificateStart,
    postCreateCertificateSuccess,
    postDeleteCertificateError,
    postDeleteCertificateStart,
    postDeleteCertificateSuccess,
    postUpdateCertificateError,
    postUpdateCertificateStart,
    postUpdateCertificateSuccess,
} from './redux';

function* getListCertificate(action: ReturnType<typeof getGetListCertificateStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListCertificateApi);
        if (res.responseCode === '1') {
            yield put({
                type: getGetListCertificateSuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: getGetListCertificateError });
    }
}

function* postCreateCertificate(action: ReturnType<typeof postCreateCertificateStart>) {
    try {
        yield call(postCreateCertificateApi, action.payload);
        yield put({
            type: postCreateCertificateSuccess.type,
        });
        toast.success('Thêm mới giấy chứng nhận cho cơ sở thành công');
    } catch (error) {
        toast.error('Thêm mới giấy chứng nhận cho cơ sở thất bại');
        yield put({ type: postCreateCertificateError });
    }
}
function* postUpdateCertificate(action: ReturnType<typeof postUpdateCertificateStart>) {
    try {
        yield call(postUpdateCertificateApi, action.payload);
        yield put({
            type: postUpdateCertificateSuccess.type,
        });
        toast.success('Cập nhật giấy chứng nhận cho cơ sở thành công');
    } catch (error) {
        toast.error('Cập nhật giấy chứng nhận cho cơ sở thất bại');
        yield put({ type: postUpdateCertificateError });
    }
}
function* postDeleteCertificate(action: ReturnType<typeof postDeleteCertificateStart>) {
    try {
        yield call(postDeleteCertificateApi, action.payload);
        yield put({
            type: postDeleteCertificateSuccess.type,
        });
        toast.success('Xoá giấy chứng nhận của cơ sở thành công');
    } catch (error) {
        toast.error('Xoá giấy chứng nhận của cơ sở thất bại');
        yield put({ type: postDeleteCertificateError });
    }
}

function* watchPostCreateCertificate() {
    yield takeLatest(postCreateCertificateStart.type, postCreateCertificate);
}
function* watchPostUpdateCertificate() {
    yield takeLatest(postUpdateCertificateStart.type, postUpdateCertificate);
}
function* watchPostDeleteCertificate() {
    yield takeLatest(postDeleteCertificateStart.type, postDeleteCertificate);
}
function* watchGetListCertificate() {
    yield takeLatest(getGetListCertificateStart.type, getListCertificate);
}

export default function* facilitiesSaga() {
    yield all([
        watchGetListCertificate(),
        watchPostCreateCertificate(),
        watchPostUpdateCertificate(),
        watchPostDeleteCertificate(),
    ]);
}
