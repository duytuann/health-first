import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';
import {
    createCertificateParams,
    updateCertificateParams,
    deleteCertificateParams,
    getListCertificateParams,
} from 'core/http/apis/certificates/types';

export interface CertificateState {
    conditionSearch: any;
    certificateList: any;
    currentFacilityId: any;
    facilityId: number;
}

const initialState: ReduxData<CertificateState> = {
    data: {
        conditionSearch: {
            facilityName: null,
            certificateStateId: null,
        },
        certificateList: [],
        currentFacilityId: {},
        facilityId: 0,
    },
    status: ReduxStateType.INIT,
};
const certificateStateSlice = createSlice({
    name: 'certificateStateSlice',
    initialState,
    reducers: {
        changeSearchCondition: (state, action: PayloadAction<any>) => {
            state.data.conditionSearch = action.payload;
        },
        changeFacilityId: (state, action: PayloadAction<number>) => {
            state.data.facilityId = action.payload;
        },
        changeCurrentFacilityId: (state, action: PayloadAction<any>) => {
            state.data.currentFacilityId = action.payload;
        },
        getGetListCertificateStart: (state, action: PayloadAction<getListCertificateParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        getGetListCertificateSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.certificateList = action.payload;
        },
        getGetListCertificateError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postCreateCertificateStart: (state, action: PayloadAction<createCertificateParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postCreateCertificateSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postCreateCertificateError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postUpdateCertificateStart: (state, action: PayloadAction<updateCertificateParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postUpdateCertificateSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postUpdateCertificateError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postDeleteCertificateStart: (state, action: PayloadAction<deleteCertificateParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postDeleteCertificateSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postDeleteCertificateError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
    },
});
export const {
    changeSearchCondition,
    changeFacilityId,
    changeCurrentFacilityId,
    getGetListCertificateStart,
    getGetListCertificateSuccess,
    getGetListCertificateError,
    postCreateCertificateStart,
    postCreateCertificateSuccess,
    postCreateCertificateError,
    postUpdateCertificateStart,
    postUpdateCertificateSuccess,
    postUpdateCertificateError,
    postDeleteCertificateStart,
    postDeleteCertificateSuccess,
    postDeleteCertificateError,
} = certificateStateSlice.actions;
export default certificateStateSlice.reducer;
