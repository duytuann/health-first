import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUserParams, updateUserParams, deleteUserParams } from 'core/http/apis/user/types';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface UserState {
    userList: any;
    currentDetailUserById: any;
}
const initialState: ReduxData<UserState> = {
    data: {
        currentDetailUserById: {},

        userList: [],
    },
    status: ReduxStateType.INIT,
};
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeCurrentDetailById: (state, action: PayloadAction<any>) => {
            state.data.currentDetailUserById = action.payload;
        },
        postGetListUserStart: (state, action: PayloadAction) => {
            state.status = ReduxStateType.LOADING;
        },
        postGetListUserSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
            state.data.userList = action.payload;
        },
        postGetListUserError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postCreateUserStart: (state, action: PayloadAction<createUserParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postCreateUserSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postCreateUserError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postUpdateUserStart: (state, action: PayloadAction<updateUserParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postUpdateUserSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postUpdateUserError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postDeleteUserStart: (state, action: PayloadAction<deleteUserParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postDeleteUserSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postDeleteUserError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
    },
});
export const {
    changeCurrentDetailById,
    postGetListUserStart,
    postGetListUserSuccess,
    postGetListUserError,
    postCreateUserError,
    postCreateUserStart,
    postCreateUserSuccess,
    postDeleteUserError,
    postDeleteUserStart,
    postDeleteUserSuccess,
    postUpdateUserError,
    postUpdateUserStart,
    postUpdateUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
