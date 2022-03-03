import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

const LoadingAppStyles = () => {
  const { theme } = useCurrentTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colorBottomTab.color,
      padding: 50,
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      color: theme.color2c2c2cToFff.color,
    },
    logo: {
      width: '100%',
      height: '100%',
      maxWidth: 500,
      maxHeight: 500,
      marginBottom: 60,
    },
  });
};

export const useLoadingAppStyles = () => LoadingAppStyles();
