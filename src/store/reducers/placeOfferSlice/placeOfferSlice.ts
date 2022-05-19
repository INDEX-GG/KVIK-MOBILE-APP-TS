import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdditionalFieldsItem } from '../../../models/IAdditionalFieldsModel';

interface IInitialState {
  aliasOne: null | string;
  aliasTwo: null | string;
  aliasThree: null | string;
  aliasFull: null | string;
  aliasName: null | string;
  additionFields: IAdditionalFieldsItem[];
}

interface IChangeInitialState {
  aliasOne: string;
  aliasTwo: string;
  aliasThree: string;
  aliasFull: string;
  aliasName: string;
  additionFields: IAdditionalFieldsItem[];
}

const initialState: IInitialState = {
  aliasOne: null,
  aliasTwo: null,
  aliasThree: null,
  aliasFull: null,
  aliasName: null,
  additionFields: [],
};

export const placeOfferSlice = createSlice({
  name: 'placeOfferSlice',
  initialState,
  reducers: {
    handleChangeState(state, action: PayloadAction<IChangeInitialState>) {
      state.aliasOne = action.payload.aliasOne;
      state.aliasTwo = action.payload.aliasTwo;
      state.aliasThree = action.payload.aliasThree;
      state.aliasFull = action.payload.aliasFull;
      state.aliasName = action.payload.aliasName;
      state.additionFields = action.payload.additionFields;
    },
  },
});

export default placeOfferSlice.reducer;
