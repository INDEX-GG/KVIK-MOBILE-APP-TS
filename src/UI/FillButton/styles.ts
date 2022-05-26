import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../hooks/useAdaptiveFont';
import { useCurrentTheme } from '../../hooks/useTheme';

export const FillButtonStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    buttonStyle: {
      backgroundColor: '#00A0AB',
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 8,
    },
    titleStyle: {
      color: '#FFFFFF',
      fontSize: fontSize.little,
      fontFamily: 'Ubuntu-Medium',
    },
    disabledButton: {
      backgroundColor: theme.colorDisabledButton.color,
    },
    disabledTitleStyle: {
      color: '#FFFFFF',
      fontSize: fontSize.little,
      fontFamily: 'Ubuntu-Medium',
    },
  });
};
