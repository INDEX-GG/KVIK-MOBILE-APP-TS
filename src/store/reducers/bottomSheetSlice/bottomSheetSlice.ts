import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BottomSheetComponentName =
  | ''
  | 'LoginBottomSheet'
  | 'CategoryBottomSheet';

export interface IBottomSheet {
  open: boolean;
  height: number;
  componentName: BottomSheetComponentName;
  componentData: object;
}

interface IPayloadOpenBottomSheet {
  height: number;
  componentName: BottomSheetComponentName;
  componentData: object;
}

const initialState: IBottomSheet = {
  open: false,
  height: -10,
  componentName: '',
  componentData: {},
};

export const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {
    openBottomSheet(state, action: PayloadAction<IPayloadOpenBottomSheet>) {
      state.open = true;
      state.height = action.payload.height;
      state.componentName = action.payload.componentName;
      state.componentData = action.payload.componentData;
    },
    closeBottomSheet(state, action: PayloadAction<number>) {
      state.open = false;
      state.height = action.payload;
      state.componentName = '';
      state.componentData = {};
    },
    addMoreHeight(state, action: PayloadAction<number>) {
      state.height += action.payload;
    },
  },
});

export default bottomSheetSlice.reducer;
