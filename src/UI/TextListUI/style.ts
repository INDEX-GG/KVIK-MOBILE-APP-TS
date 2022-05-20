import { StyleSheet } from 'react-native';

const TextListUIStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#2C2C2C',
      marginBottom: 15,
      paddingVertical: 15,
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    containerList: {
      width: '100%',
    },
    containerActive: {
      backgroundColor: '#00A0AB',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 19,
    },
  });
};

export const useTextListUIStyles = () => TextListUIStyles();
