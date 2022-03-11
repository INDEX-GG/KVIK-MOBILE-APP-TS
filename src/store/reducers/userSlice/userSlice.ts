import * as Keychain from 'react-native-keychain';
import { IUserModel } from '../../../models/IUserModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchUserLogin,
  fetchUserSignIn,
  ILoginRespSuccess,
  ISignInRespSuccess,
} from './asyncAction';

interface IUserSlice {
  userId: number | null;
  userInfo: IUserModel | null;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: IUserSlice = {
  userId: null,
  userInfo: null,
  isAuth: false,
  isLoading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingSuccess(state) {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [fetchUserSignIn.fulfilled.type]: (
      state,
      action: PayloadAction<ISignInRespSuccess>
    ) => {
      Keychain.setGenericPassword(
        action.payload.idUser + '',
        action.payload.jwt_refresh
      );
    },
    [fetchUserSignIn.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserSignIn.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [fetchUserLogin.fulfilled.type]: (
      state,
      action: PayloadAction<ILoginRespSuccess>
    ) => {
      state.isLoading = false;
      state.userInfo = action.payload.userInfo;
      state.userId = action.payload.userId;
      state.isAuth = true;
    },
    [fetchUserLogin.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
