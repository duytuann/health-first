import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getGetListActivityApi, postCreateActivityApi, postUpdateActivityApi } from 'core/http/apis/activities';
import { getGetListPlanApi, postCreatePlanApi, postUpdatePlanApi } from 'core/http/apis/plan';
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
    postUpdatePlanStart,
    postUpdatePlanSuccess,
    postUpdatePlanError,
    postUpdateActivityStart,
    postUpdateActivitySuccess,
    postUpdateActivityError,
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
        toast.error('Thêm mới kế hoạch thất bại');
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
function* postUpdatePlan(action: ReturnType<typeof postUpdatePlanStart>) {
    try {
        yield call(postUpdatePlanApi, action.payload);
        yield put({
            type: postUpdatePlanSuccess.type,
        });
        toast.success('Cập nhật kế hoạch thành công');
    } catch (error) {
        toast.error('Cập nhật kế hoạch thất bại');
        yield put({ type: postUpdatePlanError });
    }
}
function* postUpdateActivity(action: ReturnType<typeof postUpdateActivityStart>) {
    try {
        yield call(postUpdateActivityApi, action.payload);
        yield put({
            type: postUpdateActivitySuccess.type,
        });
        toast.success('Cập nhật hoạt động thành công');
    } catch (error) {
        toast.error('Cập nhật hoạt động thất bại');
        yield put({ type: postUpdateActivityError });
    }
}

function* watchUpdatePlan() {
    yield takeLatest(postUpdatePlanStart.type, postUpdatePlan);
}
function* watchUpdateActivity() {
    yield takeLatest(postUpdateActivityStart.type, postUpdateActivity);
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
    yield all([
        watchGetListPlan(),
        watchGetListActivity(),
        watchCreatePlan(),
        watchCreateActivity(),
        watchUpdatePlan(),
        watchUpdateActivity(),
    ]);
}
