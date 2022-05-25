import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { ResultResponse } from 'core/models/ResultResponse';
import {
    getGetListFacitityApi,
    postCreateFacitityApi,
    postDeleteFacitityApi,
    postUpdateFacitityApi,
} from 'core/http/apis/facilities';
import { getListDistrictsByIdApi, getListProvincesApi, getListWardsUrlByIdApi } from 'core/http/apis/static';
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
        const res: ResultResponse<any> = yield call(getGetListFacitityApi);
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
    try {
        const res: [] = yield call(postCreateFacitityApi, action.payload);
        if (res) {
            yield put({
                type: postCreateFacilitySuccess.type,
            });
        }
    } catch (error) {
        yield put({ type: postCreateFacilityError });
    }
}
function* postUpdateFacility(action: ReturnType<typeof postUpdateFacilityStart>) {
    try {
        const res: [] = yield call(postUpdateFacitityApi, action.payload);
        if (res) {
            yield put({
                type: postUpdateFacilitySuccess.type,
            });
        }
    } catch (error) {
        yield put({ type: postUpdateFacilityError });
    }
}
function* postDeleteFacility(action: ReturnType<typeof postDeleteFacilityStart>) {
    try {
        yield call(postDeleteFacitityApi, action.payload);
        yield put({
            type: postDeleteFacilitySuccess.type,
        });
    } catch (error) {
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
