import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../../hooks/useTheme';

const BottomSheetCategoryItemStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    innerWrapper: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      color: isDark ? '#FFFFFF' : '#2C2C2C',
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 21,
    },
    textActive: {
      color: '#00A0AB',
    },
    arrow: {
      color: '#C7C7C7',
    },
    arrowActive: {
      transform: [{ rotate: '180deg' }],
    },
  });
};

export const useBottomSheetCategoryItemStyles = () =>
  BottomSheetCategoryItemStyles();
