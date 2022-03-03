import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';
import { useAdaptiveFont } from '../../hooks/useAdaptiveFont';

const HeaderTabStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    safeContainer: {
      backgroundColor: theme.colorScreen.backgroundColor,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      height: 56,
      backgroundColor: theme.colorBottomTab.color,
      marginBottom: 0,
      paddingBottom: 0,
    },
    back: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      left: 8,
      top: 13,
    },
    title: {
      fontSize: fontSize.Msm,
      color: theme.colorHeaderTitle.color,
    },
    icon: {
      padding: 8,
    },
    namePrevTab: {
      marginLeft: 10,
    },
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rightContent: {
      position: 'absolute',
      right: 8,
    }
  });
};

export const useHeaderTabStyles = () => HeaderTabStyles();
