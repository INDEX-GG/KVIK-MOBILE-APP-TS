import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRefreshToken } from '../tokenSlice/asyncAction';

export interface ITokenSlice {
  refreshToken: string;
  authToken: string;
  userId: number;
  updateUser: boolean;
}

const initialState: ITokenSlice = {
  refreshToken: '',
  authToken: '',
  userId: 0,
  updateUser: true,
};

export const tokenSlice = createSlice({
  name: 'token/info',
  initialState,
  reducers: {
    tokenData(
      state,
      action: PayloadAction<Omit<ITokenSlice, 'refreshToken' | 'updateUser'>>
    ) {
      state.authToken = action.payload.authToken;
      state.userId = action.payload.userId;
    },
    notAuthUser(state) {
      state.updateUser = false;
    },
  },
  extraReducers: {
    [fetchRefreshToken.fulfilled.type]: (
      state,
      action: PayloadAction<ITokenSlice>
    ) => {
      console.log(action.payload);
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export default tokenSlice.reducer;
