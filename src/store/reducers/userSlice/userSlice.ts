import { IUserModel } from '../../../models/IUserModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserLogin, ILoginRespSuccess } from './asyncAction';

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
    userLogout(state) {
      state.isAuth = false;
      state.userId = null;
      state.userInfo = null;
    },
  },
  extraReducers: {
    [fetchUserLogin.fulfilled.type]: (
      state,
      action: PayloadAction<ILoginRespSuccess>
    ) => {
      if (action.payload?.userInfo?.name) {
        state.isLoading = false;
        state.userInfo = action.payload.userInfo;
        state.userId = action.payload.userId;
        state.isAuth = true;
      }
    },
    [fetchUserLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserLogin.rejected.type]: (state) => {
      state.isLoading = false;
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
