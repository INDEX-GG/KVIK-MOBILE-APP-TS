import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';
import { useCurrentTheme } from '../../../hooks/useTheme';

const CardAdSortStyles = () => {
  const fontSize = useAdaptiveFont();
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconBox: {
      marginRight: 5,
    },
    icon: {
      color: isDark ? '#FFFFFF' : '#8F8F8F',
    },
    text: {
      fontSize: fontSize.little,
      color: isDark ? '#FFFFFF' : '#8F8F8F',
      fontWeight: '400',
      lineHeight: 16,
    },
  });
};

export const useCardAdSortStyles = () => CardAdSortStyles();
