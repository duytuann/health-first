import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface FacilitiesState {
    planList: any;
}
const initialState: ReduxData<FacilitiesState> = {
    data: {
        planList: [],
    },
    status: ReduxStateType.INIT,
};
const planSlice = createSlice({
    name: 'planSlice',
    initialState,
    reducers: {
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
    },
});
export const { postGetListPlanStart, postGetListPlanSuccess, postGetListPlanError } = planSlice.actions;
export default planSlice.reducer;
