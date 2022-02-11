import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

export const SocialIconStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    iconContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      marginRight: 24,
      color: isDark ? '#C4C4C4' : '#2C2C2C',
    },
    lastIcon: {
      marginRight: 0,
    },
  });
};
