import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const TextUIStyles = () => {
  const { isDark } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      position: 'relative',
      marginHorizontal: 20,
    },
    inputContainer: {
      paddingVertical: 20,
      position: 'relative',
      color: isDark ? '#FFFFFF' : '#000000',
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: 22,
      borderBottomWidth: 2,
      borderStyle: 'solid',
      borderBottomColor: isDark ? '#A5A5A5' : '#E4E4E4',
    },
    inputColor: { color: isDark ? '#E9E9E9' : '#8F8F8F' },
    label: {
      fontSize: 13,
      color: isDark ? '#FFFFFF' : '#8F8F8F',
      position: 'absolute',
      top: 2,
      left: 0,
    }
  });
};

export const useTextUIStyles = () => TextUIStyles();
