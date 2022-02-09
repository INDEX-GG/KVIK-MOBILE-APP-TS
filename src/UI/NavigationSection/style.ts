import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';
import { useAdaptiveFont } from '../../hooks/useAdaptiveFont';

export const NavigationSectionStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    container: {
      padding: 16,
      marginBottom: 15,
      backgroundColor: theme.colorBottomTab.color,
    },
    activeContainer: {
      opacity: 0.5,
    },
    title: {
      fontSize: fontSize.little,
      color: theme.color000ToFFF.color,
    },
  });
};
