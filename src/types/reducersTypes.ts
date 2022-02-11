import React from 'react';
import { BottomSheetType } from '../store/reducers/bottomSheetReducer';

export interface ThemeReducer {
  theme: 'light' | 'dark';
}

export interface ThemeReducerAction {
  type: 'IS_LIGHT' | 'IS_DARK';
  payload: ThemeReducer;
}

export interface BottomSheet {
  open: boolean;
  component: React.FC | undefined;
  height: number;
}

export interface BottomSheetAction {
  type: BottomSheetType;
  payload: {
    height: number;
    component?: React.FC;
  };
}
