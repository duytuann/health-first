import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { loginApi, logoutApi } from 'core/http/apis/auth';
import LoginInterface from 'core/models/Login';
import { ResultResponse } from 'core/models/ResultResponse';
import { ACCESS_TOKEN_KEY } from 'helper/consts';
import Storage from 'helper/storage';
import { toast } from 'react-toastify';
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailed } from './redux';
function* loginSaga(action: ReturnType<typeof loginStart>) {
  try {
    const resLogin: ResultResponse<LoginInterface> = yield call(loginApi, action.payload);
    if (resLogin.isOk) {
      const {
        Object: { User, UserToken },
      } = resLogin;
      yield Storage.set(ACCESS_TOKEN_KEY, UserToken.Token || '');
      yield put({
        type: loginSuccess,
        payload: { user: User, userToken: UserToken },
      });
    } else {
      toast.error(resLogin.Object);
      yield put({ type: loginFailed, payload: resLogin.Object });
    }
  } catch (error) {
    yield put({ type: loginFailed, payload: error });
  }
}

function* logoutSaga(action: ReturnType<typeof logoutStart>) {
  try {
    const resLogout: ResultResponse<any> = yield call(logoutApi);
    if (resLogout.isOk) {
      yield put({
        type: logoutSuccess,
        payload: resLogout.Object,
      });
      yield Storage.remove(ACCESS_TOKEN_KEY);
    } else {
      toast.error(resLogout.Object);
      yield put({ type: logoutFailed, payload: resLogout.Object });
    }
  } catch (error) {
    yield put({ type: logoutFailed, payload: error });
  }
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
