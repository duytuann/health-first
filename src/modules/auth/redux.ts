import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginParams } from 'core/http/apis/auth/types';
import { User, UserToken } from 'core/models/User';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
  userToken: UserToken;
}
const initialState: ReduxData<AuthState> = {
  data: {
    isAuthenticated: false,
    user: {},
    userToken: {},
  },
  status: ReduxStateType.INIT,
};
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginStart: (state, action: PayloadAction<LoginParams>) => {
      state.status = ReduxStateType.LOADING;
      state.error = undefined;
    },
    loginSuccess: (state, action: PayloadAction<{ user: User; userToken: UserToken }>) => {
      state.status = ReduxStateType.SUCCESS;
      state.data.isAuthenticated = true;
      state.data.user = action.payload.user;
      state.data.userToken = action.payload.userToken;
    },
    loginFailed: (state, action: PayloadAction<Error>) => {
      state.status = ReduxStateType.ERROR;
      state.data.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutStart: (state, action: PayloadAction) => {
      state.status = ReduxStateType.LOADING;
      state.error = undefined;
    },
    logoutSuccess: state => {
      state.status = ReduxStateType.SUCCESS;
      state.data.isAuthenticated = false;
      state.data.user = {};
      state.data.userToken = {};
    },
    logoutFailed: (state, action: PayloadAction<Error>) => {
      state.status = ReduxStateType.ERROR;
      state.data.isAuthenticated = false;
      state.error = action.payload;
    },
  },
});
export const { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailed } = authSlice.actions;
export default authSlice.reducer;
