import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../hooks/useAdaptiveFont';

export const FillButtonStyles = () => {
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
      fontFamily: 'Roboto-Medium',
    },
  });
};
