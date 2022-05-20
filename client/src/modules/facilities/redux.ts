import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from 'redux/types';

export interface ConditionSearch {
  FacilityName: string;
  Ward: string;
  Province: string;
  TypeOfBusiness: string;
  CertificateState: string;
}

export interface FacilitiesState {
  conditionSearch: ConditionSearch;
}
const initialState: ReduxData<FacilitiesState> = {
  data: {
    conditionSearch: {
      FacilityName: '',
      Ward: '',
      Province: '',
      TypeOfBusiness: '',
      CertificateState: '',
    },
  },
  status: ReduxStateType.INIT,
};
const Facilities = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    changeSearchCondition: (state, action: PayloadAction<ConditionSearch>) => {
      state.data.conditionSearch = action.payload;
    },
  },
});
export const { changeSearchCondition } = Facilities.actions;
export default Facilities.reducer;
