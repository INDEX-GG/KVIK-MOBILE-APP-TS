import { StyleSheet } from 'react-native';

const TextNumberUIStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    inputContainer: {
      backgroundColor: '#2C2C2C',
      marginBottom: 15,
      paddingVertical: 15,
      // paddingHorizontal: 20,
      paddingLeft: 20,
      paddingRight: 30,
      position: 'relative',
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 18,
    },
    inputColor: {color: '#8F8F8F'},
    placeholderContainer: {
      position: 'absolute',
      left: 25,
      top: '20%',
    },
    inputPlaceholder: {
      color: '#FFFFFF',
      fontWeight: 'normal',
      lineHeight: 21,
      fontSize: 16,
    },
    label: {
      fontSize: 11,
      fontWeight: 'normal',
      color: '#FFFFFF',
      position: 'absolute',
      top: 0,
      left: 20,
    },
  });
};

export const useTextNumberUIStyles = () => TextNumberUIStyles();
