import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../hooks/useAdaptiveFont';

export const RatingUIStyles = () => {
  const fontSize = useAdaptiveFont();
  return StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    count: {
      fontSize: fontSize.little,
      fontWeight: '400',
      color: '#8F8F8F',
      marginRight: 4,
    },
    stars: {
      marginHorizontal: 0,
    },
  });
};

export const useRatingStylesUI = () => RatingUIStyles();
