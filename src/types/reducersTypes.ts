export interface testReducer {
  value: number;
}

export interface testReducerAction {
  type: string;
  payload: testReducer;
}

export interface ThemeReducer {
  theme: 'light' | 'dark';
}

export interface ThemeReducerAction {
  type: 'IS_LIGHT' | 'IS_DARK';
  payload: ThemeReducer;
}
