import { StyleSheet } from 'react-native';
import { useSize } from '../../../hooks/useSize';
import { useCurrentTheme } from '../../../hooks/useTheme';

const SearchAdsStyles = () => {
  const { deviceWidth } = useSize();
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      width: deviceWidth - (isDark ? 30 : 26),
      marginHorizontal: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    wrapper: {
      width: deviceWidth - 30,
      marginTop: !isDark ? 3 : 0,
      marginHorizontal: isDark ? 0 : 1,
      justifyContent: 'space-between',
    },
  });
};

export const useSearchAdsStyles = () => SearchAdsStyles();
