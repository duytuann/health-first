import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getListDistrictsByIdApi, getListProvincesApi, getListWardsUrlByIdApi } from 'core/http/apis/static';
import {
    postGetListDistrictsByIdError,
    postGetListDistrictsByIdStart,
    postGetListDistrictsByIdSuccess,
    postGetListProvincesError,
    postGetListProvincesStart,
    postGetListProvincesSuccess,
    postGetListWardsByIdStart,
    postGetListWardsByIdSuccess,
    postGetListWardsByIdError,
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

function* watchPostGetListProvinces() {
    yield takeLatest(postGetListProvincesStart.type, postGetListProvinces);
}
function* watchPostGetListDistrictsById() {
    yield takeLatest(postGetListDistrictsByIdStart.type, postGetListDistrictsById);
}
function* watchPostGetListWardsById() {
    yield takeLatest(postGetListWardsByIdStart.type, postGetListWardsById);
}

export default function* facilitiesSaga() {
    yield all([watchPostGetListProvinces(), watchPostGetListDistrictsById(), watchPostGetListWardsById()]);
}
