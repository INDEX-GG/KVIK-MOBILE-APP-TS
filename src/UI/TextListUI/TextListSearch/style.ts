import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

const TextListSearchStyles = () => {
  const { isDark } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      marginBottom: 17,
      width: '100%',
      height: 48,
      paddingHorizontal: 20,
      position: 'relative',
    },
    input: {
      backgroundColor: isDark ? '#2C2C2C' : '#FFFFFF',
      borderStyle: 'solid',
      borderColor: '#E9E9E9',
      borderWidth: isDark ? 0 : 2,
      paddingVertical: 15,
      borderRadius: 30,
      paddingLeft: 56,
      color: isDark ? '#FFFFFF' : '#000000',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 19,
    },
    icon: {
      position: 'absolute',
      left: 41,
      top: 17,
      zIndex: 1,
    },
    placeholderTextColor: {
      color: '#C7C7C7',
    },
  });
};

export const useTextListSearchStyles = () => TextListSearchStyles();
