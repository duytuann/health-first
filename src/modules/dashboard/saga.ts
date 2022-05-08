import { all, call, put, takeLatest, takeEvery } from '@redux-saga/core/effects';
import { topicGetAllApi } from 'core/http/apis/topic';
import { postGetAllFailed, postGetAllStart, postGetAllSuccess } from './redux';
import { ResultResponse } from '../../core/models/ResultResponse';

function* postTopicGetAll(action: ReturnType<any>) {
  try {
    console.log(123);
    const res: ResultResponse<any> = yield call(topicGetAllApi, action.payload);
    // if (res.isOk) {
      console.log(345);
      yield put({
        type: postGetAllSuccess.type,
        payload: res.Object,
      });
    // }
  } catch (error) {
    console.log(345);
    yield put({ type: postGetAllFailed });
  }
}

function* watchAllTopic() {
  yield takeLatest(postGetAllStart.type, postTopicGetAll);
}

export default function* topicSaga() {
  yield all([watchAllTopic()]);
}
