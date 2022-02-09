import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';
import { useAdaptiveFont } from '../../hooks/useAdaptiveFont';
import { useSize } from '../../hooks/useSize';

export const AccountScreenStyles = () => {
  const { isDark } = useCurrentTheme();
  const fontSize = useAdaptiveFont();
  const { height100vh } = useSize();

  return StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: height100vh,
      paddingHorizontal: 15,
    },
    title: {
      fontSize: fontSize.little,
      color: isDark ? '#E9E9E9' : '#504F4F',
      lineHeight: 16.41,
      marginBottom: 23,
      textAlign: 'center',
    },
    img: {
      height: 457,
      width: '100%',
      position: 'absolute',
      zIndex: -1,
      bottom: 54,
    },
  });
};
