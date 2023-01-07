import {RootState} from "../../store";

export const getProfileMessage = (state: RootState) => state.profile.message;

export const getProfileStatus = (state: RootState) => state.profile.status;
