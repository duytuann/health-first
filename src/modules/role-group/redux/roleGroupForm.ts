import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleGroupParams } from 'core/http/apis/role-group/types';
import { TabRole } from 'core/models/RoleGroup';
import { ReduxData, ReduxStateType } from 'redux/types';
export interface RoleGroupFormState {
  roleGroupDataList: TabRole[];
  RoleGroupID: string;
  RoleGroupName?: string;
}
const initialState: ReduxData<RoleGroupFormState> = {
  data: {
    RoleGroupID: '',
    roleGroupDataList: [],
  },
  status: ReduxStateType.INIT,
};
const roleGroupFormSlice = createSlice({
  name: 'roleGroupFormSlice',
  initialState,
  reducers: {
    getOneRoleGroupStart: (state, action: PayloadAction<{ id: string }>) => {
      state.status = ReduxStateType.LOADING;
    },
    getOneRoleGroupSuccess: (
      state,
      action: PayloadAction<{
        roleGroupDataList: TabRole[];
        RoleGroupID: string;
        RoleGroupName: string | undefined;
      }>
    ) => {
      state.status = ReduxStateType.SUCCESS;
      state.data.roleGroupDataList = action.payload.roleGroupDataList;
      state.data.RoleGroupID = action.payload.RoleGroupID;
      state.data.RoleGroupName = action.payload.RoleGroupName;
    },
    getOneRoleGroupFailed: (state, action: PayloadAction<Error>) => {
      state.status = ReduxStateType.ERROR;
      state.error = action.payload;
    },
    setRoleGroupID: (state, action: PayloadAction<string>) => {
      state.data.RoleGroupID = action.payload;
    },
    submitRoleGroupStart: (state, action: PayloadAction<RoleGroupParams>) => {
      state.status = ReduxStateType.SUBMITTING;
    },
    updateRoleGroupSuccess: (state, action: PayloadAction<RoleGroupParams>) => {
      state.status = ReduxStateType.SUBMITTED;
    },
    updateRoleGroupFailed: (state, action: PayloadAction<RoleGroupParams>) => {
      state.status = ReduxStateType.ERROR;
    },
    resetForm: state => {
      state.data = initialState.data;
      state.status = ReduxStateType.INIT;
    },
  },
});
export const {
  getOneRoleGroupStart,
  getOneRoleGroupSuccess,
  getOneRoleGroupFailed,
  submitRoleGroupStart,
  updateRoleGroupSuccess,
  updateRoleGroupFailed,
  setRoleGroupID,
  resetForm,
} = roleGroupFormSlice.actions;
export default roleGroupFormSlice.reducer;
