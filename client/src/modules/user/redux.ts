import { createSlice } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface FacilitiesState {}
const initialState: ReduxData<FacilitiesState> = {
    data: {},
    status: ReduxStateType.INIT,
};
const User = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});
export const {} = User.actions;
export default User.reducer;
