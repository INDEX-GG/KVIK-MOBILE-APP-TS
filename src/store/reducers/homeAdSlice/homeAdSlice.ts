import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdsSort, IHomeAds } from '../../../types/reducersTypes';
import { fetchHomeAd } from './asyncAction';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { ADS_LIMIT } from '../../../constants/constants';

interface IChangeUser {
  user_id: number;
  region_includes: string;
}

interface IChangeSort {
  sort: IAdsSort;
  regionIncludes: string;
}

interface IFetchHomeAdFulfilled {
  cards: IAdCardModel[];
  regionIncludes: string;
  regionExcludes: string;
  page: number;
  isUpdateAds: boolean;
}

const initialState: IHomeAds = {
  page: 1,
  page_limit: ADS_LIMIT,
  sort: { title: 'По умолчанию', value: 'default' },
  user_id: 0,
  region_excludes: '',
  region_includes: '',
  cards: [],
  isLoadingAds: true,
  isUpdateAds: false,
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
      state.isUpdateAds = true;
    },
    changeSort(state, action: PayloadAction<IChangeSort>) {
      state.sort = action.payload.sort;
      state.region_includes = action.payload.regionIncludes;
      state.region_excludes = '';
      state.cards = [];
      state.page = 1;
      state.isUpdateAds = true;
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
      state.isUpdateAds = action.payload.isUpdateAds;
      state.region_includes = action.payload.regionIncludes;
      state.region_excludes = action.payload.regionExcludes;
      state.cards = [...state.cards, ...action.payload.cards];
    },
    [fetchHomeAd.pending.type]: (state) => {
      state.isLoadingAds = true;
      state.isUpdateAds = false;
    },
    [fetchHomeAd.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingAds = false;
      state.error = action.payload;
    },
  },
});

export default homeAdSlice.reducer;
