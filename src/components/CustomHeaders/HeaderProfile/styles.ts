import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';
import { useCurrentTheme } from '../../../hooks/useTheme';

export const HeaderProfileStyles = () => {
  const fontSize = useAdaptiveFont();
  const { theme } = useCurrentTheme();
  console.log(123);
  return StyleSheet.create({
    container: {
      display: 'flex',
    },
    title: {
      fontSize: fontSize.Msm,
      color: theme.colorHeaderTitle.color,
    },
  });
};
