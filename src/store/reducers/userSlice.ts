import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../Models/|User';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number,
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incremented(state, action: PayloadAction<number>) {
      state.count += action.payload;
    }
  }
})

export default userSlice.reducer;