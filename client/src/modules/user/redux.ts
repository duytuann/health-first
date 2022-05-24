import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface User {
    displayName: string;
    username: string;
    email: string;
}
export interface UserState {
    userList: User[];
}
const initialState: ReduxData<UserState> = {
    data: {
        userList: [],
    },
    status: ReduxStateType.INIT,
};
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
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
    },
});
export const { postGetListUserStart, postGetListUserSuccess, postGetListUserError } = userSlice.actions;
export default userSlice.reducer;
