import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';
import { useCurrentTheme } from '../../../hooks/useTheme';

export const CustomInputStyles = () => {
  const fontSize = useAdaptiveFont();
  const { theme, isDark } = useCurrentTheme();

  return StyleSheet.create({
    input: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#8F8F8F',
      borderRadius: 8,
      height: 32,
      paddingHorizontal: 16,
      paddingVertical: 8,
      fontSize: fontSize.little,
      lineHeight: 16.41,
      width: '100%',
      color: theme.color000ToFFF.color,
      marginBottom: 2,
      fontFamily: 'Roboto-Regular',
    },
    errorMessage: {
      fontSize: fontSize.little,
      color: isDark ? '#FF6565' : '#F44545',
    },
    inputContainer: {
      position: 'relative',
    },
    inputIcon: {
      position: 'absolute',
      top: 5,
      right: 16,
    },
  });
};
