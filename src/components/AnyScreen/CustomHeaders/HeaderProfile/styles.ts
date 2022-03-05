import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../../../hooks/useAdaptiveFont';
import { useCurrentTheme } from '../../../../hooks/useTheme';

export const HeaderProfileStyles = () => {
  const fontSize = useAdaptiveFont();
  const { theme } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colorBottomTab.color,
      height: 56,
      position: 'relative',
    },
    title: {
      fontSize: fontSize.Msm,
      color: theme.colorHeaderTitle.color,
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      top: 15,
      right: 16,
    },
    themeIcon: {
      marginRight: 15,
    },
  });
};
