import { StyleSheet } from 'react-native';

const CustomSliderStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    pictures: {
      borderRadius: 8,
      width: '100%',
      height: '100%',
      flexDirection: 'row',
    },
  });
};

export const useCustomSliderStyles = () => CustomSliderStyles();
