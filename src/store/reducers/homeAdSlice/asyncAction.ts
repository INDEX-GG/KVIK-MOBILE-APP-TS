import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { kvikAxios } from '../../../http/customAxios';
import { ADS_LIMIT } from '../../../constants/constants';
import { regionExcludesAds } from '../../../services/services';

export const fetchHomeAd = createAsyncThunk(
  'homeAds/data',
  async (data: any, thunkAPI) => {
    try {
      const response = await kvikAxios
        .post<IAdCardModel[]>('getPostsPortion', data)
        .then((cards) => ({
          cards: cards.data,
          ...regionExcludesAds(
            cards.data.length,
            data.region_includes,
            data.region_excludes,
            ADS_LIMIT,
            data.page
          ),
        }));
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки объявлений');
    }
  }
);
