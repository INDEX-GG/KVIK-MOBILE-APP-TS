import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserModel } from '../../../models/IUserModel';
import { kvikAxios } from '../../../axios/customAxios';

interface IUserLoginReq {
  phone: string;
  password: string;
}

export const fetchUserLogin = createAsyncThunk(
  'user/login',
  async (data: IUserLoginReq, thunkAPI) => {
    try {
      const response = await kvikAxios
        .post<IUserModel>('mobile/checkUser', data)
        .then((cards) => cards);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки объявлений');
    }
  }
);
