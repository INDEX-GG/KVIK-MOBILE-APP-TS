import { StyleSheet } from 'react-native';

const CheckBoxUIStyles = () => {
  const width = 20;
  return StyleSheet.create({
    checkbox: {
      width: width,
      height: 20,
      borderColor: '#FFFFFF',
      borderStyle: 'solid',
      borderWidth: 2,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderRadius: width / 2,
    },
    checkboxActive: {
      backgroundColor: '#FFFFFF',
    },
  });
};

export const useCheckBoxUIStyles = () => CheckBoxUIStyles();
