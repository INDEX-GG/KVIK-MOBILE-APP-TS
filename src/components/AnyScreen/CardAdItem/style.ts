import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

const CardAdItemStyles = () => {
  const { theme, isDark } = useCurrentTheme();

  return StyleSheet.create({
    item: {
      width: '48%',
      minHeight: 240,
      backgroundColor: theme.colorBottomTab.color,
      marginBottom: 15,
      marginRight: 15,
      overflow: 'hidden',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: isDark ? 1 : 0.25,
      shadowRadius: 5,

      elevation: 15,
    },
    img: {
      width: '100%',
      height: 163,
    },
    text: {
      padding: 4,
    },
  });
};

export const useCardAdItemStyles = () => CardAdItemStyles();
