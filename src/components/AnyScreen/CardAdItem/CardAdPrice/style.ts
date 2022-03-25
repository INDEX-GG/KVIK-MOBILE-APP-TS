import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../../hooks/useAdaptiveFont';

const CardAdPriceStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    price: {
      color: theme.color2c2c2cToFff.color,
      fontSize: fontSize.Msm,
      fontWeight: 'bold',
      lineHeight: 21,
      marginBottom: 4,
    },
  });
};

export const useCardAdPriceStyles = () => CardAdPriceStyles();
