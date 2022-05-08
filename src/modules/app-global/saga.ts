import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getListTab } from 'core/http/apis/auth';
import { ResultResponse } from 'core/models/ResultResponse';
import { ListTabResponse } from 'core/models/Tab';
import { SystemKey } from 'core/http/apis/common/types';
import { getListCommonData } from 'core/http/apis/common';
import {
  getListTabFailed,
  getListTabStart,
  getListTabSuccess,
  getListSystemKeySuccess,
  // getListProviderFailed,
} from './redux';

function* getListTabSaga() {
  try {
    const res: ResultResponse<ListTabResponse> = yield call(getListTab);
    if (res.isOk) {
      yield put({ type: getListTabSuccess.type, payload: res.Object.ListTab });
    }
    const resSystemKey: ResultResponse<{ data: SystemKey[] }> = yield call(getListCommonData, 'All');

    yield put({
      type: getListSystemKeySuccess.type,
      payload: resSystemKey.Object.data,
    });
  } catch (error) {
    yield put({ type: getListTabFailed });
  }
}

function* watchListTab() {
  yield takeLatest(getListTabStart.type, getListTabSaga);
}
export default function* AppGlobalSaga() {
  yield all([watchListTab()]);
}
