import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const CheckBoxUIStyles = () => {
  const width = 20;
  const { isDark } = useCurrentTheme();
  const colors = isDark ? '#FFFFFF' : '#8F8F8F';
  return StyleSheet.create({
    checkbox: {
      width: width,
      height: 20,
      borderColor: colors,
      borderStyle: 'solid',
      borderWidth: 2,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderRadius: width / 2,
    },
    checkboxActive: {
      backgroundColor: colors,
    },
  });
};

export const useCheckBoxUIStyles = () => CheckBoxUIStyles();
