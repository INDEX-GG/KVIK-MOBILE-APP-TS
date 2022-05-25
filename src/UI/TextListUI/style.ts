import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const TextListUIStyles = () => {
  const {
    isDark,
  } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? '#2C2C2C' : '',
      marginBottom: 15,
      paddingVertical: 15,
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
    },
    label: {
      fontSize: 11,
      fontWeight: 'normal',
      color: '#FFFFFF',
      position: 'absolute',
      top: 0,
      left: 20,
    },
    arrowDefault: {
      transform: [{rotate: '0deg'}],
    },
    containerActive: {
      backgroundColor: '#00A0AB',
    },
    text: {
      color: isDark ? '#FFFFFF' : '#151515',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 19,
    },
  });
};

export const useTextListUIStyles = () => TextListUIStyles();
