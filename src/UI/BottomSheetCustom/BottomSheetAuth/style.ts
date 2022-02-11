import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';

export const BottomSheetAuthStyles = () => {
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    container: {
      marginHorizontal: 40,
    },
    buttonOne: {
      marginBottom: 15,
    },
    buttonOneWrapper: {
      paddingHorizontal: 16,
    },
    buttonTwo: {
      marginBottom: 23,
    },
    buttonTwoWrapper: {
      backgroundColor: 'rgba(82, 185, 197, 0.6)',
    },
    iconContainer: {
      marginBottom: 15,
    },
    license: {
      color: '#C7C7C7',
      textAlign: 'center',
      fontSize: fontSize.sm,
    },
    licenseLink: {
      color: '#C7C7C7',
      textAlign: 'center',
      fontSize: fontSize.sm,
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: '#000',
    },
  });
};
