import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { kvikAxios } from '../../../http/customAxios';

export const fetchHomeAd = createAsyncThunk(
  'homeAds/data',
  async (data: any, thunkAPI) => {
    try {
      const response = await kvikAxios
        .post<IAdCardModel[]>('getPostsPortion', data)
        .then((cards) => cards);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки объявлений');
    }
  }
);
