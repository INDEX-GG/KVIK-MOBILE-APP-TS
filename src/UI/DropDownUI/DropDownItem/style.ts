import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

const DropDownItemStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      padding: 5,
      backgroundColor: isDark ? '#2C2C2C' : '#FFFFFF',
    },
    text: {
      color: isDark ? '#FFFFFF' : '#8F8F8F',
      paddingLeft: 5,
    },
    hidden: {
      opacity: 0,
    },
  });
};

export const useDropDownItemStyles = () => DropDownItemStyles();
