import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginParams } from 'core/http/apis/auth/types';
import LoginInterface from 'core/models/Login';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface AuthState {
    isAuthenticated: boolean;
    username: string;
    displayName: string;
    userToken: string;
}
const initialState: ReduxData<AuthState> = {
    data: {
        isAuthenticated: false,
        username: '',
        userToken: '',
        displayName: '',
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
        loginSuccess: (state, action: PayloadAction<LoginInterface>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.isAuthenticated = true;
            state.data.username = action.payload.username;
            state.data.userToken = action.payload.accessToken;
            state.data.displayName = action.payload.displayName;
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
            state.data.username = '';
            state.data.userToken = '';
            state.data.displayName = '';
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
