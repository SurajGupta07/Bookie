import { createAsyncThunk } from "@reduxjs/toolkit";

export interface TResponse  {
    message: string,
    status: string,
}

export const getUserAsync = createAsyncThunk(
    'profile/getUser',
   async () => {
       const response = await fetch('https://dog.ceo/api/breeds/image/random');
       const data: Promise<TResponse> = await response.json();
       return (await data).message;
   }
);