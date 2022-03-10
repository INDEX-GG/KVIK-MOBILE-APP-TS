import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';
import { useDevice } from '../../../hooks/useDevice';
import { useSize } from '../../../hooks/useSize';

const AuthScreenStyles = () => {
  const { isDark } = useCurrentTheme();
  const fontSize = useAdaptiveFont();
  const { isAndroid } = useDevice();

  return StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
      flex: isAndroid ? 1 : 0.9,
    },
    title: {
      fontSize: fontSize.little,
      color: isDark ? '#E9E9E9' : '#504F4F',
      lineHeight: 16.41,
      marginBottom: 23,
      textAlign: 'center',
    },
    imgContainer: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: -1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      height: isAndroid ? '90%' : '84%',
      width: '100%',
    },
  });
};

export const useAuthScreenStyles = () => AuthScreenStyles();
