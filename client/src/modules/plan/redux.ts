import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPlanParams, updatePlanParams } from 'core/http/apis/plan/types';
import { CreateActivityParams, UpdateActivityParams } from 'core/http/apis/activities/types';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface FacilitiesState {
    planList: any;
    activityOfPlan: any;
    currentPlanId: number;
    currentFacilityId: number;
    currentActivityId: number;
}
const initialState: ReduxData<FacilitiesState> = {
    data: {
        // currentPlanId for Update
        currentPlanId: 0,
        currentActivityId: 0,
        currentFacilityId: 0,

        // plan and activity list
        planList: [],
        activityOfPlan: [],
    },
    status: ReduxStateType.INIT,
};
const planSlice = createSlice({
    name: 'planSlice',
    initialState,
    reducers: {
        changeCurrentPlanId: (state, action: PayloadAction<number>) => {
            state.data.currentPlanId = action.payload;
        },
        changeCurrentFacilityId: (state, action: PayloadAction<number>) => {
            state.data.currentFacilityId = action.payload;
        },
        changeCurrentActivityId: (state, action: PayloadAction<number>) => {
            state.data.currentActivityId = action.payload;
        },
        postGetListPlanStart: (state, action: PayloadAction) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListPlanSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.planList = action.payload;
        },
        postGetListPlanError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postGetListActivityStart: (state, action: PayloadAction) => {
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
    },
});
export const {
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
} = planSlice.actions;
export default planSlice.reducer;
