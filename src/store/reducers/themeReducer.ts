import {ThemeReducer, ThemeReducerAction} from '../../types/reducersTypes';

const defaultValue: ThemeReducer = {
  theme: 'light',
};

export enum ThemeType {
  IS_DARK = 'IS_DARK',
  IS_LIGHT = 'IS_LIGHT',
}

export const themeReducer = (
  state = defaultValue,
  action: ThemeReducerAction,
) => {
  switch (action.type) {
    case ThemeType.IS_LIGHT:
      return {...state, theme: 'light'};
    case ThemeType.IS_DARK:
      return {...state, theme: 'dark'};
    default:
      return {...state};
  }
};
