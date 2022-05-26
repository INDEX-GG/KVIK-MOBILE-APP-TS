import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const TextListUIStyles = () => {
  const {
    isDark,
  } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      position: 'relative',
    },
    innerContainer: {
      borderBottomWidth: 2,
      borderStyle: 'solid',
      borderBottomColor: isDark ? '#A5A5A5' : '#E4E4E4',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,

    },
    label: {
      fontSize: 13,
      color: isDark ? '#FFFFFF' : '#8F8F8F',
      position: 'absolute',
      top: 2,
      left: 0,
    },
    iconContainer: {
      marginRight: 15,
    },
    arrowDefault: {
      transform: [{rotate: '0deg'}],
    },
    containerActive: {
      backgroundColor: '#00A0AB',
    },
    text: {
      color: isDark ? '#FFFFFF' : '#151515',
      fontSize: 18,
      lineHeight: 19,
    },
  });
};

export const useTextListUIStyles = () => TextListUIStyles();
