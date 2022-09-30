import { RootState } from "../../store";


export const selectMessage = (state: RootState) => state.profile.message;
export const selectStatus = (state: RootState) => state.profile.status;