import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getGetListActivityApi, postCreateActivityApi } from 'core/http/apis/activities';
import { getGetListPlanApi, postCreatePlanApi } from 'core/http/apis/plan';
import { toast } from 'react-toastify';
import {
    postGetListActivityError,
    postGetListActivityStart,
    postGetListActivitySuccess,
    postGetListPlanError,
    postGetListPlanStart,
    postGetListPlanSuccess,
    postCreatePlanStart,
    postCreatePlanSuccess,
    postCreatePlanError,
    postCreateActivityStart,
    postCreateActivitySuccess,
    postCreateActivityError,
} from './redux';

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
function* postGetListActivity(action: ReturnType<typeof postGetListActivityStart>) {
    try {
        const res: [] = yield call(getGetListActivityApi);
        if (res) {
            yield put({
                type: postGetListActivitySuccess.type,
                payload: res,
            });
        }
    } catch (error) {
        yield put({ type: postGetListActivityError });
    }
}
function* postCreatePlan(action: ReturnType<typeof postCreatePlanStart>) {
    try {
        yield call(postCreatePlanApi, action.payload);
        yield put({
            type: postCreatePlanSuccess.type,
        });
        toast.success('Thêm mới kế hoạch thành công');
    } catch (error) {
        toast.error('Thêm mới hoạt động thất bại');
        yield put({ type: postCreatePlanError });
    }
}
function* postCreateActivity(action: ReturnType<typeof postCreateActivityStart>) {
    try {
        yield call(postCreateActivityApi, action.payload);
        yield put({
            type: postCreateActivitySuccess.type,
        });
        toast.success('Thêm mới hoạt động thành công');
    } catch (error) {
        toast.error('Thêm mới hoạt động thất bại');
        yield put({ type: postCreateActivityError });
    }
}

function* watchGetListPlan() {
    yield takeLatest(postGetListPlanStart.type, postGetListPlan);
}
function* watchGetListActivity() {
    yield takeLatest(postGetListActivityStart.type, postGetListActivity);
}
function* watchCreatePlan() {
    yield takeLatest(postCreatePlanStart.type, postCreatePlan);
}
function* watchCreateActivity() {
    yield takeLatest(postCreateActivityStart.type, postCreateActivity);
}

export default function* PlansSaga() {
    yield all([watchGetListPlan(), watchGetListActivity(), watchCreatePlan(), watchCreateActivity()]);
}
