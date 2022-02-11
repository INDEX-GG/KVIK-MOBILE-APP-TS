import { BottomSheet, BottomSheetAction } from '../../types/reducersTypes';

const defaultValue: BottomSheet = {
  open: false,
  height: -0,
  component: undefined,
};

export enum BottomSheetType {
  IS_OPEN = 'open',
  IS_CLOSE = 'close',
}

export const bottomSheetReducer = (
  state = defaultValue,
  action: BottomSheetAction
) => {
  switch (action.type) {
    case BottomSheetType.IS_CLOSE:
      return { ...state, open: false, component: undefined };
    case BottomSheetType.IS_OPEN:
      return { ...state, open: true, component: action.payload.component, height: action.payload.height };
    default:
      return { ...state };
  }
};
