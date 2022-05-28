import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    addRoleUserParams,
    createUserParams,
    deleteUserParams,
    getListUserParams,
    updateUserParams,
    addRegionUserParams,
} from 'core/http/apis/user/types';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface UserState {
    searchUser: getListUserParams;
    userList: any;
    currentDetailUserById: any;
}
const initialState: ReduxData<UserState> = {
    data: {
        searchUser: {
            username: null,
            phoneNumber: null,
            email: null,
            userRoleId: null,
        },

        currentDetailUserById: {},
        userList: [],
    },
    status: ReduxStateType.INIT,
};
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeSearchUser: (state, action: PayloadAction<getListUserParams>) => {
            state.data.searchUser = action.payload;
        },
        changeCurrentDetailById: (state, action: PayloadAction<any>) => {
            state.data.currentDetailUserById = action.payload;
        },
        postGetListUserStart: (state, action: PayloadAction<getListUserParams>) => {
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
        postAddRoleUserStart: (state, action: PayloadAction<addRoleUserParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postAddRoleUserSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postAddRoleUserError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
        postAddRegionUserStart: (state, action: PayloadAction<addRegionUserParams>) => {
            state.status = ReduxStateType.LOADING;
        },
        postAddRegionUserSuccess: (state, action: PayloadAction<any>) => {
            state.status = ReduxStateType.SUCCESS;
        },
        postAddRegionUserError: (state, action: PayloadAction<Error>) => {
            state.status = ReduxStateType.ERROR;
        },
    },
});
export const {
    changeSearchUser,
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
    postAddRoleUserError,
    postAddRoleUserStart,
    postAddRoleUserSuccess,
    postAddRegionUserStart,
    postAddRegionUserSuccess,
    postAddRegionUserError,
} = userSlice.actions;
export default userSlice.reducer;
