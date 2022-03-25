import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../../hooks/useAdaptiveFont';

const CardAdDateStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    date: {
      color: theme.colorBottomTabIcon.color,
      fontSize: fontSize.t,
      fontWeight: 'normal',
      lineHeight: 12,
    },
  });
};

export const useCardAdDateStyles = () => CardAdDateStyles();
