import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import profileReducer from './features/profile/profileSlice';
import languageReducer from './features/language/languageSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    language: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type APPThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
