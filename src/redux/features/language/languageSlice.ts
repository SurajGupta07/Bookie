import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ILanguageState} from './types';
import English from '../../../translations/english.json';
import Hindi from '../../../translations/hindi.json';
import {LANGUAGES} from '../../../types/enums';

const initialState: ILanguageState = {
  selectedLanguage: English,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<LANGUAGES>) {
      switch (action.payload) {
        case LANGUAGES.ENGLISH:
          state.selectedLanguage = English;
          break;
        case LANGUAGES.HINDI:
          state.selectedLanguage = Hindi;
          break;
        default:
          state.selectedLanguage = English;
          break;
      }
    },
  },
});

export const {setLanguage} = languageSlice.actions;

export default languageSlice.reducer;
