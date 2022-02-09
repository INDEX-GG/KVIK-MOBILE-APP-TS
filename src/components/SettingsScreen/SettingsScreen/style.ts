import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';

export const SettingsScreenStyles = () => {
  const { theme } = useCurrentTheme();
  const fontSize = useAdaptiveFont();

  return StyleSheet.create({
    container: {
      marginTop: 24,
    },
    docWrapper: {
      paddingHorizontal: 15,
    },
    docTitle: {
      fontSize: fontSize.sm,
      color: theme.colorGrayToWhite.color,
      lineHeight: 14,
      marginBottom: 15,
    },
    docItem: {
      padding: 0,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  });
};
