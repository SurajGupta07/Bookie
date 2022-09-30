import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync } from "./profileThunk";

const initialState = {
    message: 'I am Profile slice',
    status: 'idle',
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.message = action.payload;
            })
            .addCase(getUserAsync.rejected, (state) => {
                state.status = 'error';
            })
    },
});

export const { setMessage } = profileSlice.actions;

export default profileSlice.reducer;