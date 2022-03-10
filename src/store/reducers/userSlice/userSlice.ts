import { IUserModel } from '../../../models/IUserModel';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUserLogin } from './asyncAction';

interface IUserSlice {
  userId: number | null;
  userInfo: IUserModel | null;
  isAuth: boolean;
  isLoading: boolean;
  token: string | null;
}

const initialState: IUserSlice = {
  userId: null,
  userInfo: null,
  isAuth: false,
  isLoading: true,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserLogin.fulfilled.type]: (state, action: any) => {
      return action.payload;
    },
    // [fetchUserLogin.rejected.type]: () => {
    //
    // },
  },
});

export default userSlice.reducer;
