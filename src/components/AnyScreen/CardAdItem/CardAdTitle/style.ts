import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../../hooks/useAdaptiveFont';

const CardAdTitleStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    title: {
      color: theme.color2c2c2cToFff.color,
      fontSize: fontSize.sm,
      fontWeight: 'bold',
      lineHeight: 14,
      marginBottom: 4,
    },
  });
};

export const useCardAdTitleStyles = () => CardAdTitleStyles();
