import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

const TextListItemStyles = () => {
  const {isDark} = useCurrentTheme();
  return StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 25,
      paddingHorizontal: 20,
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      color: isDark ? '#FFFFFF' : '#000000',
    },
  });
};

export const useTextListItemStyles = () => TextListItemStyles();
