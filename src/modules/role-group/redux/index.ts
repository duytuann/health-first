import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleGroupListParams } from 'core/http/apis/role-group/types';
import { ReduxData, ReduxStateType } from 'redux/types';
import { combineReducers } from 'redux';
import { DEFAULT_PAGE_SIZE } from 'helper/consts';
import roleGroupFormReducer from './roleGroupForm';

export interface ConditionSearch {
  RoleGroupName: string;
  StatusID: number;
  CurrentPage: number;
  PageSize: number;
}
export interface RoleGroupState {
  roleGroupList: any;
  conditionSearch: ConditionSearch;
}
const initialState: ReduxData<RoleGroupState> = {
  data: {
    roleGroupList: [],
    conditionSearch: {
      RoleGroupName: '',
      StatusID: 1,
      CurrentPage: 1,
      PageSize: DEFAULT_PAGE_SIZE,
    },
  },
  status: ReduxStateType.INIT,
};
const roleGroupSlice = createSlice({
  name: 'roleGroupSlice',
  initialState,
  reducers: {
    getRoleGroupStart: (state, action: PayloadAction<RoleGroupListParams>) => {
      state.status = ReduxStateType.LOADING;
    },
    getRoleGroupSuccess: (state, action: PayloadAction<{}>) => {
      state.status = ReduxStateType.SUCCESS;
      state.data.roleGroupList = action.payload;
    },
    getRoleGroupFailed: (state, action: PayloadAction<Error>) => {
      state.status = ReduxStateType.ERROR;
      state.error = action.payload;
    },
    changeSearchCondition: (state, action: PayloadAction<ConditionSearch>) => {
      state.data.conditionSearch = action.payload;
    },
    deleteRoleGroupStart: (state, action: PayloadAction<string>) => {
      state.status = ReduxStateType.LOADING;
    },
  },
});
export const {
  getRoleGroupStart,
  getRoleGroupSuccess,
  getRoleGroupFailed,
  changeSearchCondition,
  deleteRoleGroupStart,
} = roleGroupSlice.actions;
export default combineReducers({
  roleGroupList: roleGroupSlice.reducer,
  roleGroupForm: roleGroupFormReducer,
});
