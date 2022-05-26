import { all, call, put, select, takeLatest } from '@redux-saga/core/effects';
import {
    getGetListFacitityApi,
    postCreateFacitityApi,
    postDeleteFacitityApi,
    postUpdateFacitityApi,
} from 'core/http/apis/facilities';
import { getListDistrictsByIdApi, getListProvincesApi, getListWardsUrlByIdApi } from 'core/http/apis/static';
import { ResultResponse } from 'core/models/ResultResponse';
import { toast } from 'react-toastify';
import { RootState } from 'redux/store';
import {
    getGetListFacilityError,
    getGetListFacilityStart,
    getGetListFacilitySuccess,
    postCreateFacilityError,
    postCreateFacilityStart,
    postCreateFacilitySuccess,
    postDeleteFacilityError,
    postDeleteFacilityStart,
    postDeleteFacilitySuccess,
    postGetListDistrictsByIdError,
    postGetListDistrictsByIdStart,
    postGetListDistrictsByIdSuccess,
    postGetListProvincesError,
    postGetListProvincesStart,
    postGetListProvincesSuccess,
    postGetListWardsByIdError,
    postGetListWardsByIdStart,
    postGetListWardsByIdSuccess,
    postUpdateFacilityError,
    postUpdateFacilityStart,
    postUpdateFacilitySuccess,
} from './redux';

function* getListFacility(action: ReturnType<typeof getGetListFacilityStart>) {
    try {
        const res: ResultResponse<any> = yield call(getGetListFacitityApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: getGetListFacilitySuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: getGetListFacilityError });
    }
}
function* postGetListProvinces(action: ReturnType<typeof postGetListProvincesStart>) {
    try {
        const res: ResultResponse<any> = yield call(getListProvincesApi, {});
        if (res.responseCode === '1') {
            yield put({
                type: postGetListProvincesSuccess.type,
                payload: res.responseData.sort((a: any, b: any) => (a.id > b.id ? 1 : -1)),
            });
        }
    } catch (error) {
        yield put({ type: postGetListProvincesError });
    }
}

function* postGetListDistrictsById(action: ReturnType<typeof postGetListDistrictsByIdStart>) {
    try {
        const res: ResultResponse<any> = yield call(getListDistrictsByIdApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListDistrictsByIdSuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: postGetListDistrictsByIdError });
    }
}

function* postGetListWardsById(action: ReturnType<typeof postGetListWardsByIdStart>) {
    try {
        const res: ResultResponse<any> = yield call(getListWardsUrlByIdApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postGetListWardsByIdSuccess.type,
                payload: res.responseData,
            });
        }
    } catch (error) {
        yield put({ type: postGetListWardsByIdError });
    }
}

function* postCreateFacility(action: ReturnType<typeof postCreateFacilityStart>) {
    const { conditionSearch } = yield select((state: RootState) => state.facilities.data);
    try {
        const res: ResultResponse<any> = yield call(postCreateFacitityApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postCreateFacilitySuccess.type,
            });
            toast.success('Tạo mới cơ sở thành công');
            yield put({
                type: getGetListFacilityStart.type,
                payload: conditionSearch,
            });
        }
    } catch (error) {
        toast.error('Tạo mới cơ sở thất bại');
        yield put({ type: postCreateFacilityError });
    }
}
function* postUpdateFacility(action: ReturnType<typeof postUpdateFacilityStart>) {
    const { conditionSearch } = yield select((state: RootState) => state.facilities.data);
    try {
        const res: ResultResponse<any> = yield call(postUpdateFacitityApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postUpdateFacilitySuccess.type,
            });
            toast.success('Cập nhật cơ sở thành công');
            yield put({
                type: getGetListFacilityStart.type,
                payload: conditionSearch,
            });
        }
    } catch (error) {
        toast.error('Cập nhật cơ sở thất bại');
        yield put({ type: postUpdateFacilityError });
    }
}
function* postDeleteFacility(action: ReturnType<typeof postDeleteFacilityStart>) {
    const { conditionSearch } = yield select((state: RootState) => state.facilities.data);
    try {
        const res: ResultResponse<any> = yield call(postDeleteFacitityApi, action.payload);
        if (res.responseCode === '1') {
            yield put({
                type: postDeleteFacilitySuccess.type,
            });
            toast.success('Xoá cơ sở thành công');
            yield put({
                type: getGetListFacilityStart.type,
                payload: conditionSearch,
            });
        }
    } catch (error) {
        toast.error('Xoá cơ sở thất bại');
        yield put({ type: postDeleteFacilityError });
    }
}

function* watchPostGetListProvinces() {
    yield takeLatest(postGetListProvincesStart.type, postGetListProvinces);
}
function* watchPostGetListDistrictsById() {
    yield takeLatest(postGetListDistrictsByIdStart.type, postGetListDistrictsById);
}
function* watchPostGetListWardsById() {
    yield takeLatest(postGetListWardsByIdStart.type, postGetListWardsById);
}
function* watchPostCreateFacility() {
    yield takeLatest(postCreateFacilityStart.type, postCreateFacility);
}
function* watchPostUpdateFacility() {
    yield takeLatest(postUpdateFacilityStart.type, postUpdateFacility);
}
function* watchPostDeleteFacility() {
    yield takeLatest(postDeleteFacilityStart.type, postDeleteFacility);
}
function* watchGetListFacility() {
    yield takeLatest(getGetListFacilityStart.type, getListFacility);
}

export default function* facilitiesSaga() {
    yield all([
        watchPostGetListProvinces(),
        watchPostGetListDistrictsById(),
        watchPostGetListWardsById(),
        watchPostCreateFacility(),
        watchGetListFacility(),
        watchPostUpdateFacility(),
        watchPostDeleteFacility(),
    ]);
}
