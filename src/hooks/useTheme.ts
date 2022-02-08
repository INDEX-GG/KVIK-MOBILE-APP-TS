import { useTypeSelector } from './useTypedSelector';
import { useDispatch } from 'react-redux';
import { ThemeType } from '../store/reducers/themeReducer';
import { ThemeReducer } from '../types/reducersTypes';
import { darkTheme, lightTheme } from '../theme/theme';

export const useCurrentTheme = () => {
  // Current Theme
  const storeTheme = useTypeSelector(
    (state) => state.themeReducer
  ) as ThemeReducer;

  const dispatch = useDispatch();
  const themeObject = storeTheme.theme === 'light' ? lightTheme : darkTheme;
  const isDark = storeTheme.theme === 'dark';

  const handleChangeTheme = (theme: string) => {
    if (theme === ThemeType.IS_DARK) {
      dispatch({ type: ThemeType.IS_LIGHT });
    }
    if (theme === ThemeType.IS_LIGHT) {
      dispatch({ type: ThemeType.IS_DARK });
    }
  };

  return {
    isDark: isDark,
    themeName: storeTheme.theme,
    theme: themeObject,
    toggleTheme: handleChangeTheme,
  };
};
