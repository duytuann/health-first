import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    CreateActivityParams,
    CreateSampleParams,
    DeleteActivityParams,
    DeleteSampleParams,
    GetListParams,
    UpdateActivityParams,
    UpdateSampleParams,
    GetListSampleParams,
} from 'core/http/apis/activities/types';
import { createPlanParams, deletePlanParams, getListParams, updatePlanParams } from 'core/http/apis/plan/types';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface PlanState {
    planList: any;
    activityOfPlan: any;
    sampleList: any;
    currentPlanId: number;
    currentDetailPlanById: any;
    currentFacilityId: number;
    currentActivityId: number;
    searchPlan: getListParams;
    searchActivity: GetListParams;
    searchSample: GetListSampleParams;
    foodList: any;
    inspectionUnit: any;
}
const initialState: ReduxData<PlanState> = {
    data: {
        // search
        searchPlan: {
            planName: null,
            planStateId: null,
        },
        searchActivity: {
            activityName: null,
            activityStateId: null,
            activityResultId: null,
        },
        searchSample: {
            sampleStateId: null,
            inspectionUnitId: null,
            sampleResultId: null,
            foodId: null,
        },

        // currentPlanId for Update
        currentPlanId: 0,
        currentActivityId: 0,
        currentFacilityId: 0,
        currentDetailPlanById: {},

        // List
        planList: [],
        activityOfPlan: [],
        sampleList: [],
        foodList: [],
        inspectionUnit: [],
    },
    status: ReduxStateType.INIT,
};
const planSlice = createSlice({
    name: 'planSlice',
    initialState,
    reducers: {
        changeSearchPlan: (state, action: PayloadAction<getListParams>) => {
            state.data.searchPlan = action.payload;
        },
        changeSearchActivity: (state, action: PayloadAction<GetListParams>) => {
            state.data.searchActivity = action.payload;
        },
        changeSearchSample: (state, action: PayloadAction<GetListSampleParams>) => {
            state.data.searchSample = action.payload;
        },
        changeCurrentDetailPlanById: (state, action: PayloadAction<any>) => {
            state.data.currentDetailPlanById = action.payload;
        },
        changeCurrentPlanId: (state, action: PayloadAction<number>) => {
            state.data.currentPlanId = action.payload;
        },
        changeCurrentFacilityId: (state, action: PayloadAction<number>) => {
            state.data.currentFacilityId = action.payload;
        },
        changeCurrentActivityId: (state, action: PayloadAction<number>) => {
            state.data.currentActivityId = action.payload;
        },
        postGetListPlanStart: (state, action: PayloadAction<getListParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListPlanSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.planList = action.payload;
        },
        postGetListPlanError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postGetListActivityStart: (state, action: PayloadAction<GetListParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListActivitySuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.activityOfPlan = action.payload;
        },
        postGetListActivityError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postCreatePlanStart: (state, action: PayloadAction<createPlanParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postCreatePlanSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postCreatePlanError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postCreateActivityStart: (state, action: PayloadAction<CreateActivityParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postCreateActivitySuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postCreateActivityError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postUpdatePlanStart: (state, action: PayloadAction<updatePlanParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postUpdatePlanSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postUpdatePlanError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postUpdateActivityStart: (state, action: PayloadAction<UpdateActivityParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postUpdateActivitySuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postUpdateActivityError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postDeletePlanStart: (state, action: PayloadAction<deletePlanParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postDeletePlanSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postDeletePlanError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postDeleteActivityStart: (state, action: PayloadAction<DeleteActivityParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postDeleteActivitySuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postDeleteActivityError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postGetListSampleStart: (state, action: PayloadAction<GetListSampleParams>) => {
            // ??!!
            state.status = ReduxStateType.LOADING;
        },
        postGetListSampleSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.sampleList = action.payload;
        },
        postGetListSampleError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postCreateSampleStart: (state, action: PayloadAction<CreateSampleParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postCreateSampleSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postCreateSampleError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postUpdateSampleStart: (state, action: PayloadAction<UpdateSampleParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postUpdateSampleSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postUpdateSampleError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postDeleteSampleStart: (state, action: PayloadAction<DeleteSampleParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postDeleteSampleSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postDeleteSampleError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postGetListFoodStart: (state, action: PayloadAction) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListFoodSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.foodList = action.payload;
        },
        postGetListFoodError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postGetListInspectionUnitStart: (state, action: PayloadAction) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListInspectionUnitSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.inspectionUnit = action.payload;
        },
        postGetListInspectionUnitError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
    },
});
export const {
    postGetListFoodError,
    postGetListFoodStart,
    postGetListFoodSuccess,
    postGetListInspectionUnitError,
    postGetListInspectionUnitStart,
    postGetListInspectionUnitSuccess,
    changeSearchActivity,
    changeSearchPlan,
    changeSearchSample,
    changeCurrentDetailPlanById,
    changeCurrentPlanId,
    changeCurrentFacilityId,
    changeCurrentActivityId,
    postGetListPlanStart,
    postGetListPlanSuccess,
    postGetListPlanError,
    postGetListActivityStart,
    postGetListActivitySuccess,
    postGetListActivityError,
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
} = planSlice.actions;
export default planSlice.reducer;
