import { StyleSheet } from 'react-native';
import { useSize } from '../../../hooks/useSize';

const SearchAdsListStyles = () => {
  const { deviceWidth } = useSize();

  return StyleSheet.create({
    container: {
      marginHorizontal: 0,
    },
    wrapper: {
      width: deviceWidth - 30,
      justifyContent: 'space-between',
      marginHorizontal: 15,
    },
  });
};

export const useSearchAdsListStyles = () => SearchAdsListStyles();
