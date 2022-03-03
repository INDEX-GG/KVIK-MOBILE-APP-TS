import React from 'react';
import { BottomSheetType } from '../store/reducers/bottomSheetReducer';
import { UserModel } from '../models/UserModel';
import { UserInfoType } from '../store/reducers/userInfoReducer';

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

export interface UserInfo {
  userId?: number | null;
  isAuth?: boolean;
  isLoading?: boolean;
  userInfo?: UserModel | null;
}

export interface UserModelAction {
  type: UserInfoType;
  payload: UserInfo;
}
