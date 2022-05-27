import { all, call, put, takeLatest, select } from '@redux-saga/core/effects';
import {
    getGetListActivityApi,
    postCreateActivityApi,
    postDeleteActivityApi,
    postUpdateActivityApi,
    getGetListSampleApi,
    postCreateSampleApi,
    postDeleteSampleApi,
    postUpdateSampleApi,
} from 'core/http/apis/activities';
import { getListFoodsApi, getListInspectionUnitsApi } from 'core/http/apis/static';
import { getGetListPlanApi, postCreatePlanApi, postDeletePlanApi, postUpdatePlanApi } from 'core/http/apis/plan';
import { ResultResponse } from 'core/models/ResultResponse';
import { toast } from 'react-toastify';
import { RootState } from 'redux/store';
import {
    postGetListFoodError,
    postGetListFoodStart,
    postGetListFoodSuccess,
    postGetListInspectionUnitError,
    postGetListInspectionUnitStart,
    postGetListInspectionUnitSuccess,
    postCreateActivityError,
    postCreateActivityStart,
    postCreateActivitySuccess,
    postCreatePlanError,
    postCreatePlanStart,
    postCreatePlanSuccess,
    postDeleteActivityError,
    postDeleteActivityStart,
    postDeleteActivitySuccess,
    postDeletePlanError,
    postDeletePlanStart,
    postDeletePlanSuccess,
    postGetListActivityError,
    postGetListActivityStart,
    postGetListActivitySuccess,
    postGetListPlanError,
    postGetListPlanStart,
    postGetListPlanSuccess,
    postUpdateActivityError,
    postUpdateActivityStart,
    postUpdateActivitySuccess,
    postUpdatePlanError,
    postUpdatePlanStart,
    postUpdatePlanSuccess,
    postCreateSampleError,
    postCreateSampleStart,
    postCreateSampleSuccess,
    postDeleteSampleError,
    postDeleteSampleStart,
    postDeleteSampleSuccess,
    postGetListSampleError,
    postGetListSampleStart,
    postGetListSampleSuccess,
    postUpdateSampleError,
    postUpdateSampleStart,
    postUpdateSampleSuccess,
} from './redux';

function* postGetListPlan(action: ReturnType<typeof postGetListPlanStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListPlanApi, action.payload);
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
        const res: ResultResponse<any> = yield call(getGetListActivityApi, action.payload);
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
    const { searchPlan } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postCreatePlanApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postCreatePlanSuccess.type,
            });
            toast.success('Thêm mới kế hoạch thành công');
            yield put({
                type: postGetListPlanStart.type,
                payload: searchPlan,
            });
        }
    } catch (error) {
        toast.error('Thêm mới kế hoạch thất bại');
        yield put({ type: postCreatePlanError });
    }
}
function* postCreateActivity(action: ReturnType<typeof postCreateActivityStart>) {
    const { searchActivity } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postCreateActivityApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postCreateActivitySuccess.type,
            });
            toast.success('Thêm mới hoạt động thành công');
            yield put({
                type: postGetListActivityStart.type,
                payload: searchActivity,
            });
        }
    } catch (error) {
        toast.error('Thêm mới hoạt động thất bại');
        yield put({ type: postCreateActivityError });
    }
}
function* postUpdatePlan(action: ReturnType<typeof postUpdatePlanStart>) {
    const { searchPlan } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postUpdatePlanApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postUpdatePlanSuccess.type,
            });
            toast.success('Cập nhật kế hoạch thành công');
            yield put({
                type: postGetListPlanStart.type,
                payload: searchPlan,
            });
        }
    } catch (error) {
        toast.error('Cập nhật kế hoạch thất bại');
        yield put({ type: postUpdatePlanError });
    }
}
function* postUpdateActivity(action: ReturnType<typeof postUpdateActivityStart>) {
    const { searchActivity } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postUpdateActivityApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postUpdateActivitySuccess.type,
            });
            toast.success('Cập nhật hoạt động thành công');
            yield put({
                type: postGetListActivityStart.type,
                payload: searchActivity,
            });
        }
    } catch (error) {
        toast.error('Cập nhật hoạt động thất bại');
        yield put({ type: postUpdateActivityError });
    }
}

function* postDeletePlan(action: ReturnType<typeof postDeletePlanStart>) {
    const { searchPlan } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postDeletePlanApi, action.payload);

        if (res.responseCode === '1') {
            yield put({
                type: postDeletePlanSuccess.type,
            });
            toast.success('Xoá kế hoạch thành công');
            yield put({
                type: postGetListPlanStart.type,
                payload: searchPlan,
            });
        }
    } catch (error) {
        toast.error('Xoá kế hoạch thất bại');
        yield put({ type: postDeletePlanError });
    }
}
function* postDeleteActivity(action: ReturnType<typeof postDeleteActivityStart>) {
    const { searchActivity } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postDeleteActivityApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postDeleteActivitySuccess.type,
            });
            toast.success('Xoá hoạt động thành công');
            yield put({
                type: postGetListActivityStart.type,
                payload: searchActivity,
            });
        }
    } catch (error) {
        toast.error('Xoá hoạt động thất bại');
        yield put({ type: postDeleteActivityError });
    }
}
function* postGetListSample(action: ReturnType<typeof postGetListSampleStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListSampleApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListSampleSuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: postGetListSampleError });
    }
}
function* postCreateSample(action: ReturnType<typeof postCreateSampleStart>) {
    const { searchSample } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postCreateSampleApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postCreateSampleSuccess.type,
            });
            toast.success('Cập nhật người dùng thành công');
            yield put({
                type: postGetListSampleStart.type,
                payload: searchSample,
            });
        }
    } catch (error) {
        yield put({ type: postCreateSampleError });
        toast.error('Cập nhật người dùng thất bại');
    }
}
function* postUpdateSample(action: ReturnType<typeof postUpdateSampleStart>) {
    const { searchSample } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postUpdateSampleApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postUpdateSampleSuccess.type,
            });
            toast.success('Cập nhật người dùng thành công');
            yield put({
                type: postGetListSampleStart.type,
                payload: searchSample,
            });
        }
    } catch (error) {
        yield put({ type: postUpdateSampleError });
        toast.error('Cập nhật người dùng thất bại');
    }
}
function* postDeleteSample(action: ReturnType<typeof postDeleteSampleStart>) {
    const { searchSample } = yield select((state: RootState) => state.plan.data);
    try {
        const res: ResultResponse<any> = yield call(postDeleteSampleApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postDeleteSampleSuccess.type,
            });
            toast.success('Xoá mẫu giám định thành công');
            yield put({
                type: postGetListSampleStart.type,
                payload: searchSample,
            });
        }
    } catch (error) {
        yield put({ type: postDeleteSampleError });
        toast.error('Xoá mẫu giám định thất bại');
    }
}
function* postGetFoods(action: ReturnType<typeof postGetListFoodStart>) {
    try {
        const res: ResultResponse<any> = yield call(getListFoodsApi);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListFoodSuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: postGetListFoodError });
    }
}
function* postGetUnits(action: ReturnType<typeof postGetListInspectionUnitStart>) {
    try {
        const res: ResultResponse<any> = yield call(getListInspectionUnitsApi);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListInspectionUnitSuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: postGetListInspectionUnitError });
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
function* watchGetListSample() {
    yield takeLatest(postGetListSampleStart.type, postGetListSample);
}
function* watchCreateSample() {
    yield takeLatest(postCreateSampleStart.type, postCreateSample);
}
function* watchUpdateSample() {
    yield takeLatest(postUpdateSampleStart.type, postUpdateSample);
}
function* watchDeleteSample() {
    yield takeLatest(postDeleteSampleStart.type, postDeleteSample);
}
function* watchFoods() {
    yield takeLatest(postGetListFoodStart.type, postGetFoods);
}
function* watchUnits() {
    yield takeLatest(postGetListInspectionUnitStart.type, postGetUnits);
}

export default function* PlansSaga() {
    yield all([
        watchFoods(),
        watchUnits(),
        watchGetListPlan(),
        watchGetListActivity(),
        watchCreatePlan(),
        watchCreateActivity(),
        watchUpdatePlan(),
        watchUpdateActivity(),
        watchDeletePlan(),
        watchDeleteActivity(),
        watchGetListSample(),
        watchUpdateSample(),
        watchDeleteSample(),
        watchCreateSample(),
    ]);
}
