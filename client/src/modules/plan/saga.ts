import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getGetListPlanApi } from 'core/http/apis/plan';
import { postGetListPlanStart, postGetListPlanSuccess, postGetListPlanError } from './redux';

function* postGetListPlan(action: ReturnType<typeof postGetListPlanStart>) {
    try {
        const res: [] = yield call(getGetListPlanApi);
        if (res) {
            yield put({
                type: postGetListPlanSuccess.type,
                payload: res,
            });
        }
    } catch (error) {
        yield put({ type: postGetListPlanError });
    }
}

function* watchGetListPlan() {
    yield takeLatest(postGetListPlanStart.type, postGetListPlan);
}

export default function* PlansSaga() {
    yield all([watchGetListPlan()]);
}
