import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDetailById } from 'core/http/apis/static/types';
import { CreateParams } from 'core/http/apis/facilities/types';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface ConditionSearch {
    FacilityName: string;
    Ward: string;
    Province: string;
    TypeOfBusiness: string;
    CertificateState: string;
}

export interface AddressResp {
    id: number;
    name: string;
}
export interface Facility {
    id: number;
    facilityCode: string;
    name: string;
    businessType: string;
    facilityState: string;
}

export interface FacilitiesState {
    conditionSearch: ConditionSearch;
    currentProvinceId: number;
    currentDistrictId: number;
    provincesList: AddressResp[];
    districtsListById: AddressResp[];
    wardsByListId: AddressResp[];
    facilitiesList: Facility[];
}
const initialState: ReduxData<FacilitiesState> = {
    data: {
        conditionSearch: {
            FacilityName: '',
            Ward: '',
            Province: '',
            TypeOfBusiness: '',
            CertificateState: '',
        },

        // Facility List
        facilitiesList: [],

        // Place
        currentProvinceId: 0,
        currentDistrictId: 0,
        provincesList: [],
        districtsListById: [],
        wardsByListId: [],
    },
    status: ReduxStateType.INIT,
};
const facilitiesSlice = createSlice({
    name: 'facilitiesSlice',
    initialState,
    reducers: {
        changeSearchCondition: (state, action: PayloadAction<ConditionSearch>) => {
            state.data.conditionSearch = action.payload;
        },
        changeCurrentProvinceId: (state, action: PayloadAction<number>) => {
            state.data.currentProvinceId = action.payload;
        },
        changeCurrentDistrictId: (state, action: PayloadAction<number>) => {
            state.data.currentDistrictId = action.payload;
        },
        resetWardsByList: state => {
            state.data.wardsByListId = [];
        },
        postGetListProvincesStart: (state, action: PayloadAction) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListProvincesSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.provincesList = action.payload;
        },
        postGetListProvincesError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postGetListDistrictsByIdStart: (state, action: PayloadAction<getDetailById>) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListDistrictsByIdSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.districtsListById = action.payload;
        },
        postGetListDistrictsByIdError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postGetListWardsByIdStart: (state, action: PayloadAction<getDetailById>) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListWardsByIdSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.wardsByListId = action.payload;
        },
        postGetListWardsByIdError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postCreateFacilityStart: (state, action: PayloadAction<CreateParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postCreateFacilitySuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postCreateFacilityError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        getGetListFacilityStart: (state, action: PayloadAction) => {
            state.status = ReduxStateType.LOADING;
        },
        getGetListFacilitySuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.facilitiesList = action.payload;
        },
        getGetListFacilityError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
    },
});
export const {
    changeSearchCondition,
    changeCurrentProvinceId,
    resetWardsByList,
    changeCurrentDistrictId,
    getGetListFacilityStart,
    getGetListFacilitySuccess,
    getGetListFacilityError,
    postGetListProvincesStart,
    postGetListProvincesSuccess,
    postGetListProvincesError,
    postGetListDistrictsByIdStart,
    postGetListDistrictsByIdSuccess,
    postGetListDistrictsByIdError,
    postGetListWardsByIdStart,
    postGetListWardsByIdSuccess,
    postGetListWardsByIdError,
    postCreateFacilityStart,
    postCreateFacilitySuccess,
    postCreateFacilityError,
} = facilitiesSlice.actions;
export default facilitiesSlice.reducer;
