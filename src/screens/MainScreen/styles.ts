import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

export const MainScreenStyle = () => {
  const { theme } = useCurrentTheme();

  return StyleSheet.create({
    tabBarStyle: {
      backgroundColor: theme.colorBottomTab.color,
      borderTopWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    headerStyle: {
      backgroundColor: theme.colorBottomTab.color,
    },
    tabBarItemStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
};
