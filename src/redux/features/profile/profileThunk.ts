import {createAsyncThunk} from "@reduxjs/toolkit";
import END_POINTS from "../../../utils/endpoint";
import {IResponse} from "./types";

export const getUserAsync = createAsyncThunk("profile/getUser", async () => {
  const response = await fetch(END_POINTS.getRandomDogs);
  const data: Promise<IResponse> = await response.json();
  return data;
});
