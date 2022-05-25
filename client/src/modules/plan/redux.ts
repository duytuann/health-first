import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPlanParams } from 'core/http/apis/plan/types';
import { CreateActivityParams } from 'core/http/apis/activities/types';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface FacilitiesState {
    planList: any;
    activityOfPlan: any;
    currentPlanId: number;
    currentFacilityId: number;
}
const initialState: ReduxData<FacilitiesState> = {
    data: {
        // currentPlanId for Update
        currentPlanId: 0,
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
    },
});
export const {
    changeCurrentPlanId,
    changeCurrentFacilityId,
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
} = planSlice.actions;
export default planSlice.reducer;
