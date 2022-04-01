import { StyleSheet } from 'react-native';
import { useSize } from '../../hooks/useSize';
import { useCurrentTheme } from '../../hooks/useTheme';

const BottomSheetCustomStyles = () => {
  const { deviceHeight } = useSize();
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 9999,
      width: '100%',
      backgroundColor: isDark ? '#151515' : '#FFFFFF',
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    line: {
      backgroundColor: '#C7C7C7',
      width: 42,
      height: 3,
      marginBottom: 20,
      marginTop: 10,
      borderRadius: 10,
    },
    modalWrapper: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    modalPressable: {
      position: 'absolute',
      width: '100%',
      height: deviceHeight - 240,
      zIndex: 1,
    },
  });
};

export const useBottomSheetCustomStyles = () => BottomSheetCustomStyles();
