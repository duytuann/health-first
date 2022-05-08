import { createSelector } from 'reselect';
import { RootState } from 'redux/store';

const selectAppGlobal = (state: RootState) => state.appGlobal;

export const selectProvince = createSelector(selectAppGlobal, (items: any) => items.data.listProvince);
