import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const DropDownUIStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    wrapper: {
      width: 130,
      backgroundColor: isDark ? '#2C2C2C' : '#FFFFFF',
      paddingVertical: 8,
      borderRadius: 8,
      position: 'absolute',
      zIndex: 100,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },
  });
};

export const useDropDownUIStyles = () => DropDownUIStyles();
