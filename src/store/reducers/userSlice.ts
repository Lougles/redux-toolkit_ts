import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../Models/|User';
import { fetchUsers } from './ActionCreators';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    /*This Reducers need in that time, if you write your own FetchUsers Acton Creator, if you use createAsyncThunk, you 
    use extraReducers */

    // usersFetchin(state) {
    //   state.isLoading = true;
    // },
    // usersFetchinSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.users = action.payload;
    // },
    // usersFetchinError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  //extraReducers for CreateAsyncThunk in ActionCreators. Its make writting code more easy. 

  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default userSlice.reducer;