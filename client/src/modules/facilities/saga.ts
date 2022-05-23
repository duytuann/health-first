import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { postCreateFacitityApi } from 'core/http/apis/facilities';
import { getListDistrictsByIdApi, getListProvincesApi, getListWardsUrlByIdApi } from 'core/http/apis/static';
import {
    postCreateFacilityError,
    postCreateFacilityStart,
    postCreateFacilitySuccess,
    postGetListDistrictsByIdError,
    postGetListDistrictsByIdStart,
    postGetListDistrictsByIdSuccess,
    postGetListProvincesError,
    postGetListProvincesStart,
    postGetListProvincesSuccess,
    postGetListWardsByIdError,
    postGetListWardsByIdStart,
    postGetListWardsByIdSuccess,
} from './redux';

function* postGetListProvinces(action: ReturnType<typeof postGetListProvincesStart>) {
    try {
        const res: [] = yield call(getListProvincesApi, {});
        if (res) {
            yield put({
                type: postGetListProvincesSuccess.type,
                payload: res.sort((a: any, b: any) => (a.id > b.id ? 1 : -1)),
            });
        }
    } catch (error) {
        yield put({ type: postGetListProvincesError });
    }
}

function* postGetListDistrictsById(action: ReturnType<typeof postGetListDistrictsByIdStart>) {
    try {
        const res: [] = yield call(getListDistrictsByIdApi, action.payload);
        if (res) {
            yield put({
                type: postGetListDistrictsByIdSuccess.type,
                payload: res,
            });
        }
    } catch (error) {
        yield put({ type: postGetListDistrictsByIdError });
    }
}

function* postGetListWardsById(action: ReturnType<typeof postGetListWardsByIdStart>) {
    try {
        const res: [] = yield call(getListWardsUrlByIdApi, action.payload);
        if (res) {
            yield put({
                type: postGetListWardsByIdSuccess.type,
                payload: res,
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

export default function* facilitiesSaga() {
    yield all([
        watchPostGetListProvinces(),
        watchPostGetListDistrictsById(),
        watchPostGetListWardsById(),
        watchPostCreateFacility(),
    ]);
}
