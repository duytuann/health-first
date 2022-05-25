import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { ResultResponse } from 'core/models/ResultResponse';
import {
    getGetListActivityApi,
    postCreateActivityApi,
    postUpdateActivityApi,
    postDeleteActivityApi,
} from 'core/http/apis/activities';
import { getGetListPlanApi, postCreatePlanApi, postUpdatePlanApi, postDeletePlanApi } from 'core/http/apis/plan';
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
    postDeleteActivityError,
    postDeleteActivityStart,
    postDeleteActivitySuccess,
    postDeletePlanError,
    postDeletePlanStart,
    postDeletePlanSuccess,
} from './redux';

function* postGetListPlan(action: ReturnType<typeof postGetListPlanStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListPlanApi);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListPlanSuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: postGetListPlanError });
    }
}
function* postGetListActivity(action: ReturnType<typeof postGetListActivityStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListActivityApi);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListActivitySuccess.type,
                payload: res.responseData,
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

function* postDeletePlan(action: ReturnType<typeof postDeletePlanStart>) {
    try {
        yield call(postDeletePlanApi, action.payload);
        yield put({
            type: postDeletePlanSuccess.type,
        });
        toast.success('Xoá kế hoạch thành công');
    } catch (error) {
        toast.error('Xoá kế hoạch thất bại');
        yield put({ type: postDeletePlanError });
    }
}
function* postDeleteActivity(action: ReturnType<typeof postDeleteActivityStart>) {
    try {
        yield call(postDeleteActivityApi, action.payload);
        yield put({
            type: postDeleteActivitySuccess.type,
        });
        toast.success('Xoá hoạt động thành công');
    } catch (error) {
        toast.error('Xoá hoạt động thất bại');
        yield put({ type: postDeleteActivityError });
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
function* watchDeletePlan() {
    yield takeLatest(postDeletePlanStart.type, postDeletePlan);
}
function* watchDeleteActivity() {
    yield takeLatest(postDeleteActivityStart.type, postDeleteActivity);
}

export default function* PlansSaga() {
    yield all([
        watchGetListPlan(),
        watchGetListActivity(),
        watchCreatePlan(),
        watchCreateActivity(),
        watchUpdatePlan(),
        watchUpdateActivity(),
        watchDeletePlan(),
        watchDeleteActivity(),
    ]);
}
