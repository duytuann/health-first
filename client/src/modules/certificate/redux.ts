import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginParams } from 'core/http/apis/auth/types';
import { User, UserToken } from 'core/models/User';
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
