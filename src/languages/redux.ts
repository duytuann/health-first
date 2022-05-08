import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IntlShape } from 'react-intl';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import translate from './translate';

export enum LanguageType {
  VI = 'VI',
  EN = 'EN',
}

export const Language: { [key in LanguageType]: string } = {
  [LanguageType.VI]: 'vi',
  [LanguageType.EN]: 'en',
};

export interface State {
  lang: string;
  type: LanguageType;
  intl: IntlShape | undefined;
}

const initialState: State = {
  lang: Language[LanguageType.VI],
  type: LanguageType.VI,
  intl: undefined,
};

const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.type = action.payload;
      state.lang = Language[action.payload];

      if (state.intl) {
        state.intl.messages = translate[action.payload];
        state.intl.locale = action.payload;
      }
    },
    setIntlContext: (state, action: PayloadAction<IntlShape>) => {
      state.intl = action.payload;
    },
  },
});

export const { changeLanguage, setIntlContext } = languageSlice.actions;
const languagePersistConfig = {
  key: 'language',
  storage: storage,
  blacklist: ['intl'],
};
export default persistReducer(languagePersistConfig, languageSlice.reducer);
