import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHomeAds } from '../../../types/reducersTypes';
import { fetchHomeAd } from './asyncAction';
import { IAdCardModel } from '../../../models/IAdCardModel';

const initialState: IHomeAds = {
  page: 1,
  page_limit: 100,
  sort: 'default',
  user_id: 0,
  region_excludes: '',
  region_includes: 'RU$RU-CHE$Челябинск',
  cards: [],
  isLoading: true,
  error: '',
};

export const homeAdSlice = createSlice({
  name: 'homeAds',
  initialState,
  reducers: {
    changeUserId(state, action: PayloadAction<number>) {
      state.user_id = action.payload;
      state.isLoading = true;
    },
    changeCity(state, action: PayloadAction<string>) {
      state.region_includes = action.payload;
      state.region_excludes = '';
    },
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchHomeAd.fulfilled.type]: (
      state,
      action: PayloadAction<IAdCardModel[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.cards = [...state.cards, ...action.payload];
    },
    [fetchHomeAd.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchHomeAd.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default homeAdSlice.reducer;
