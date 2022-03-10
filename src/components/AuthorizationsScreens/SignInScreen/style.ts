import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';

const SignInScreenStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    container: {
      marginTop: 40,
      paddingHorizontal: 25,
    },
    inputOne: {
      marginBottom: 16,
    },
    inputTwo: {
      marginBottom: 24,
    },
    resetLink: {
      color: theme.colors.primary,
      fontSize: fontSize.sm,
      fontWeight: '500',
      textAlign: 'right',
    },
    textContainer: {
      marginBottom: 25,
    },
    passwordIcon: {
      color: '#C7C7C7',
    },
  });
};

export const useSignInScreenStyles = () => SignInScreenStyles();
