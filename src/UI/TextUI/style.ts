import { StyleSheet } from 'react-native';

const TextUIStyles = () => {
  return StyleSheet.create({
    inputContainer: {
      backgroundColor: '#2C2C2C',
      marginBottom: 15,
      paddingVertical: 15,
      paddingHorizontal: 20,
      position: 'relative',
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 18,
    },
    inputColor: {color: '#8F8F8F'},
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

export const useTextUIStyles = () => TextUIStyles();
