import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { loginApi } from 'core/http/apis/auth';
import LoginInterface from 'core/models/Login';
import { ACCESS_TOKEN_KEY } from 'helper/consts';
import Storage from 'helper/storage';
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess } from './redux';
function* loginSaga(action: ReturnType<typeof loginStart>) {
    try {
        const resLogin: LoginInterface = yield call(loginApi, action.payload);
        const { accessToken, refreshToken } = resLogin;
        yield Storage.set(ACCESS_TOKEN_KEY, `Bearer ${accessToken}` || '');
        yield put({
            type: loginSuccess,
            payload: action.payload,
        });
    } catch (error) {
        yield put({ type: loginFailed, payload: error });
    }
}

function* logoutSaga(action: ReturnType<typeof logoutStart>) {
    // try {
    // const resLogout: {} = yield call(logoutApi);
    // if (resLogout) {
    yield put({
        type: logoutSuccess,
        payload: 'Đăng xuất thành công',
    });
    yield Storage.remove(ACCESS_TOKEN_KEY);
    //   } else {
    //     toast.error('Đăng xuất thành công!');
    //     yield put({ type: logoutFailed, payload: 'Đăng xuất thành công!' });
    //   }
    // } catch (error) {
    //   yield put({ type: logoutFailed, payload: error });
    // }
}
function* watchLogin() {
    yield takeLatest(loginStart.type, loginSaga);
}
function* watchLogout() {
    yield takeLatest(logoutStart.type, logoutSaga);
}

export default function* authSaga() {
    yield all([watchLogin(), watchLogout()]);
}
