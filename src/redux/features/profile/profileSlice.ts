import {createSlice} from "@reduxjs/toolkit";
import {getUserAsync} from "./profileThunk";
import {APPSTATES} from "../../../types/enums";

const initialState = {
  message: "Profile slice example",
  status: APPSTATES.IDLE,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getUserAsync.pending, state => {
        state.status = APPSTATES.LOADING;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = APPSTATES.IDLE;
        state.message = action.payload.message;
      })
      .addCase(getUserAsync.rejected, state => {
        state.status = APPSTATES.ERROR;
      });
  },
});

export const {setMessage} = profileSlice.actions;

export default profileSlice.reducer;
