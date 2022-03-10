import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBottomSheet {
  open: boolean;
  height: number;
}

const initialState: IBottomSheet = {
  open: false,
  height: -230,
};

export const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {
    openBottomSheet(state, action: PayloadAction<number>) {
      state.open = true;
      state.height = action.payload;
    },
    closeBottomSheet(state) {
      state.open = false;
      state.height = -230;
    },
  },
});

export default bottomSheetSlice.reducer;
