import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SystemKey } from 'core/http/apis/common/types';
import { TabItem } from 'core/models/Tab';
import { ReduxData, ReduxStateType } from 'redux/types';

interface AppGlobalState {
  listTab: TabItem[];
  isCloseSideMenu: boolean;
  listSystemKey: SystemKey[];
}

const initialState: ReduxData<AppGlobalState> = {
  data: {
    listTab: [],
    isCloseSideMenu: false,
    listSystemKey: [],
  },
  status: ReduxStateType.INIT,
};
const AppGlobalReducer = createSlice({
  name: 'appGlobalSlice',
  initialState,
  reducers: {
    toggleSideMenu: (state, action: PayloadAction<boolean>) => {
      state.data.isCloseSideMenu = action.payload;
    },

    getListTabStart: (state, action: PayloadAction) => {
      state.status = ReduxStateType.LOADING;
    },
    getListTabSuccess: (state, action: PayloadAction<TabItem[]>) => {
      state.data.listTab = action.payload;
      state.status = ReduxStateType.SUCCESS;
    },
    getListTabFailed: (state, action: PayloadAction<Error>) => {
      state.status = ReduxStateType.ERROR;
    },
    getListSystemKeyStart: (state, action: PayloadAction) => {
      state.status = ReduxStateType.LOADING;
    },
    getListSystemKeySuccess: (state, action: PayloadAction<SystemKey[]>) => {
      state.data.listSystemKey = action.payload;
      state.status = ReduxStateType.SUCCESS;
    },
    getListSystemKeyFailed: (state, action: PayloadAction<Error>) => {
      state.status = ReduxStateType.ERROR;
    },
  },
});

export const {
  getListTabStart,
  getListTabSuccess,
  getListTabFailed,
  toggleSideMenu,
  getListSystemKeyStart,
  getListSystemKeySuccess,
  getListSystemKeyFailed,
} = AppGlobalReducer.actions;
export default AppGlobalReducer.reducer;
