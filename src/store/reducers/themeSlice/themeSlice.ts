import { lightTheme, darkTheme } from '../../../theme/theme';
import { createSlice } from '@reduxjs/toolkit';

interface ITheme {
  theme: typeof darkTheme;
  themeName: 'dark' | 'light';
}

const initialState: ITheme = {
  theme: darkTheme,
  themeName: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    lightTheme(state) {
      state.themeName = 'light';
      state.theme = lightTheme;
    },
    darkTheme(state) {
      state.themeName = 'dark';
      state.theme = darkTheme;
    },
  },
});

export default themeSlice.reducer;
