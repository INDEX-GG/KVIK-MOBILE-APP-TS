import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';
import { useSize } from '../../../hooks/useSize';

const CardAdItemStyles = () => {
  const { theme, isDark } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    item: {
      width: '100%',
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
    price: {
      color: theme.color2c2c2cToFff.color,
      fontSize: fontSize.Msm,
      fontWeight: 'bold',
      lineHeight: 21,
      marginBottom: 4,
    },
    title: {
      color: theme.color2c2c2cToFff.color,
      fontSize: fontSize.sm,
      fontWeight: 'normal',
      lineHeight: 14,
      marginBottom: 4,
    },
    addressAndPrice: {
      color: theme.colorBottomTabIcon.color,
      fontSize: fontSize.t,
      fontWeight: 'normal',
      lineHeight: 12,
    },
  });
};

export const useCardAdItemStyles = () => CardAdItemStyles();
