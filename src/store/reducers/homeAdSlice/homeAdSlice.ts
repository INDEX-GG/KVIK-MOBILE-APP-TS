import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHomeAds } from '../../../types/reducersTypes';
import { fetchHomeAd } from './asyncAction';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { ADS_LIMIT } from '../../../constants/constants';

interface IChangeUser {
  user_id: number;
  region_includes: string;
}

interface IFetchHomeAdFulfilled {
  card: IAdCardModel[];
  regionIncludes: string;
  regionExcludes: string;
  page: number;
}

const initialState: IHomeAds = {
  page: 1,
  page_limit: ADS_LIMIT,
  sort: 'default',
  user_id: 0,
  region_excludes: '',
  region_includes: '',
  cards: [],
  isLoadingAds: true,
  error: '',
};

export const homeAdSlice = createSlice({
  name: 'homeAds',
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<IChangeUser>) {
      state.user_id = action.payload.user_id;
      state.region_includes = action.payload.region_includes;
    },
    changeCity(state, action: PayloadAction<string>) {
      state.region_includes = action.payload;
      state.region_excludes = '';
    },
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      state.cards = [];
      state.page = 1;
    },
  },
  extraReducers: {
    [fetchHomeAd.fulfilled.type]: (
      state,
      action: PayloadAction<IFetchHomeAdFulfilled>
    ) => {
      state.error = '';
      state.isLoadingAds = false;
      state.page = action.payload.page;
      state.region_includes = action.payload.regionIncludes;
      state.region_excludes = action.payload.regionExcludes;
      state.cards = [...state.cards, ...action.payload.card];
    },
    [fetchHomeAd.pending.type]: (state) => {
      state.isLoadingAds = true;
    },
    [fetchHomeAd.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingAds = false;
      state.error = action.payload;
    },
  },
});

export default homeAdSlice.reducer;
