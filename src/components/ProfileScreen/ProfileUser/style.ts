import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';

const ProfileUserStyles = () => {
  const { isDark } = useCurrentTheme();
  const fonSize = useAdaptiveFont();

  return StyleSheet.create({
    container: {
      marginTop: 25,
      marginBottom: 15,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    name: {
      marginTop: 8,
      marginBottom: 4,
      fontSize: fonSize.Mt,
      lineHeight: 16,
      fontWeight: '500',
      color: isDark ? '#8F8F8F' : '#151515',
    },
    date: {
      fontSize: fonSize.little,
      fontWeight: '400',
      color: isDark ? '#8F8F8F' : '#151515',
      marginBottom: 8,
    },
  });
};

export const useProfileUserStyles = () => ProfileUserStyles();
