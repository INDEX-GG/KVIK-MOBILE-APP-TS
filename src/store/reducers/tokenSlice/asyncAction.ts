import { createAsyncThunk } from '@reduxjs/toolkit';
import { kvikAxios } from '../../../http/customAxios';

export interface IRefreshToken {
  authToken: string;
}

export const fetchRefreshToken = createAsyncThunk(
  'user/refresh',
  async (data: IRefreshToken, thunkAPI) => {
    try {
      const reqData = { RefreshAuthToken: data.authToken };
      const response = await kvikAxios
        .post<IRefreshToken>('mobile/refresh', reqData)
        .then((token) => token);
      return {
        refreshToken: response.data.authToken,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка api refresh');
    }
  }
);
