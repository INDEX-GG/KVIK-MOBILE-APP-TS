import { StyleSheet } from 'react-native';

const TextListSearchStyles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: 17,
      width: '100%',
      height: 48,
      paddingHorizontal: 20,
    },
    input: {
      backgroundColor: '#2C2C2C',
      paddingVertical: 16,
      borderRadius: 30,
      paddingLeft: 56,
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 16,
    },
    placeholderTextColor: {
      color: '#C7C7C7'
    },
  });
};

export const useTextListSearchStyles = () => TextListSearchStyles();
