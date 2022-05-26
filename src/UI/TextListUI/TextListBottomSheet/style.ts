import { StyleSheet } from 'react-native';

const TextListBottomSheetStyles = () => {
  return StyleSheet.create({
    bottomSheetTitle: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'normal',
      color: '#00A0AB',
      marginBottom: 16,
    },
    buttonContainer: {
      width: '100%',
      height: 50,
      backgroundColor: '#00A0AB',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 20,
      lineHeight: 22,
    },
    containerList: {
      width: '100%',
      marginBottom: 5,
    },
  });
};

export const useTextListBottomSheetStyles = () => TextListBottomSheetStyles();
