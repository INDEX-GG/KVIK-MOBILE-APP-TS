import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';

const PlaceOfferCategoryItemStyles = () => {
  const { theme, isDark } = useCurrentTheme();

  return StyleSheet.create({
    item: {
      height: 50,
      paddingHorizontal: 11,
      paddingVertical: 13,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    activeItem: {
      backgroundColor: isDark ? '#3C3C3C' : '#ECECEC',
    },
    text: {
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 21,
      color: isDark ? '#E9E9E9' : '#2C2C2C',
    },
    iconBox: {
      marginRight: 9,
      width: 24,
      height: 24,
    },
  });
};

export const usePlaceOfferCategoryItemStyles = () =>
  PlaceOfferCategoryItemStyles();
