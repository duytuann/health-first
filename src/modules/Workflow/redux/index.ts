import { createSlice } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';

interface F0ManagementState {}
const initialState: ReduxData<F0ManagementState> = {
  data: {},
  status: ReduxStateType.INIT,
};
const workflowReducer = createSlice({
  name: 'workflowSlice',
  initialState: initialState,
  reducers: {},
});

export const {} = workflowReducer.actions;

export default workflowReducer.reducer;
