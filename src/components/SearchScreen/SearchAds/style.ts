import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useDevice } from '../../../hooks/useDevice';
import { useSize } from '../../../hooks/useSize';

const SearchAdsStyles = () => {
  const { isDark } = useCurrentTheme();
  const { deviceWidth } = useSize();
  const { isAndroid } = useDevice();

  return StyleSheet.create({
    container: {
      width: deviceWidth - 30,
      marginHorizontal: isAndroid ? (!isDark ? 10 : 0) : 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    wrapper: {
      justifyContent: 'space-between',
    },
    item: {
      width: deviceWidth / 2 - 30,
    },
  });
};

export const useSearchAdsStyles = () => SearchAdsStyles();