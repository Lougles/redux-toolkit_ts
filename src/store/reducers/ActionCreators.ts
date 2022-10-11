import { IUser } from './../Models/|User';
// import { AppDispatch } from './../store';
// import { userSlice } from './userSlice';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async(dispatch: AppDispatch) => {
//   try{
//     dispatch(userSlice.actions.usersFetchin())
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.usersFetchinSuccess(response.data));
//   } catch (error: string | any) {
//     dispatch(userSlice.actions.usersFetchinError(error.message))
//   }
// }

// Redux toolkit has a function which has already done asyncFetch, so you don't need to write a code like the one above.

export const fetchUsers = createAsyncThunk (
  'user/fetchAll',
  async (_, thunkAPI) => {
    //try-catch need only to catch a mistake, because we can't see the field with mistake as in the previous method.
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return response.data;
    }catch (e) {
      return thunkAPI.rejectWithValue('Failed to load posts')
    }
  }
) 