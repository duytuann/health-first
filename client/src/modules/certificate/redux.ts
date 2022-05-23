import { createSlice } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface CertificateState {}
const initialState: ReduxData<CertificateState> = {
  data: {},
  status: ReduxStateType.INIT,
};
const certificateStateSlice = createSlice({
  name: 'certificateStateSlice',
  initialState,
  reducers: {},
});
export const {} = certificateStateSlice.actions;
export default certificateStateSlice.reducer;
