import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from './types';


export interface State {
  type: ThemeType;
}
const initialState: State = {
  type: ThemeType.DARK,
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.type = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
