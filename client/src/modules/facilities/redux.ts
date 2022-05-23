import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDetailById } from 'core/http/apis/static/types';
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

export interface FacilitiesState {
    conditionSearch: ConditionSearch;
    currentProvinceId: number;
    currentDistrictId: number;
    provincesList: AddressResp[];
    districtsListById: AddressResp[];
    wardsById: AddressResp[];
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
        currentProvinceId: 0,
        currentDistrictId: 0,
        provincesList: [],
        districtsListById: [],
        wardsById: [],
    },
    status: ReduxStateType.INIT,
};
const Facilities = createSlice({
    name: 'authSlice',
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
            state.data.wardsById = action.payload;
        },
        postGetListWardsByIdError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
    },
});
export const {
    changeSearchCondition,
    changeCurrentProvinceId,
    changeCurrentDistrictId,
    postGetListProvincesStart,
    postGetListProvincesSuccess,
    postGetListProvincesError,
    postGetListDistrictsByIdStart,
    postGetListDistrictsByIdSuccess,
    postGetListDistrictsByIdError,
    postGetListWardsByIdStart,
    postGetListWardsByIdSuccess,
    postGetListWardsByIdError,
} = Facilities.actions;
export default Facilities.reducer;
