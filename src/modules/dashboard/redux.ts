import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';

interface TopicState {
  listTopic: {};
}

const initialState: ReduxData<TopicState> = {
  data: {
    listTopic: {},
  },
  status: ReduxStateType.INIT,
};

const TopicReducer = createSlice({
  name: 'topicSlice',
  initialState,
  reducers: {
    postGetAllStart: (state, action: PayloadAction<any>) => {
      state.status = ReduxStateType.LOADING;
    },

    postGetAllSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.status = ReduxStateType.SUCCESS;
    },

    postGetAllFailed: (state, action: PayloadAction<any>) => {
      state.status = ReduxStateType.ERROR;
    },
  },
});

export const { postGetAllFailed, postGetAllStart, postGetAllSuccess } = TopicReducer.actions;

export default TopicReducer.reducer;
