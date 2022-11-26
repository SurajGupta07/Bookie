import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ILanguageState} from './types';
import English from '../../../translations/english.json';
import Hindi from '../../../translations/hindi.json';

const initialState: ILanguageState = {
  selectedLanguage: English,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case 'English':
          state.selectedLanguage = English;
          break;
        case 'Hindi':
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
