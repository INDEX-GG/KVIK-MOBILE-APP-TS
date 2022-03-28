import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useDevice } from '../../../hooks/useDevice';

const CardAdItemStyles = () => {
  const { theme, isDark } = useCurrentTheme();
  const { isAndroid } = useDevice();

  return StyleSheet.create({
    item: {
      width: '48%',
      minHeight: 240,
      backgroundColor: theme.colorBottomTab.color,
      marginBottom: 15,
      marginRight: 15,
      overflow: isAndroid ? 'hidden' : 'visible',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: isDark ? 1 : 0.5,
      shadowRadius: 3,
      elevation: 2,
      position: 'relative',
    },
    text: {
      padding: 4,
      overflow: 'hidden',
    },
  });
};

export const useCardAdItemStyles = () => CardAdItemStyles();
