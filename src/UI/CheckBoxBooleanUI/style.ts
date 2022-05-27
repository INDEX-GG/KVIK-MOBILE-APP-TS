import { StyleSheet } from 'react-native';

const CheckBoxBooleanStyles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      paddingLeft: 15,
      paddingVertical: 5,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      lineHeight: 21,
      marginLeft: 10,
    },
    test: {
      color: 'red',
    },
  });
};

export const useCheckBoxBooleanStyles = () => CheckBoxBooleanStyles();
