import { StyleSheet } from 'react-native';

const CustomSwiperStyles = () => {
  return StyleSheet.create({
    pagination: {
      position: 'absolute',
      left: 0,
      bottom: 5,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#5A5A5A',
      backgroundColor: '#c4c4c4',
    },
    active: {
      width: 8,
      height: 8,
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#5A5A5A',
      backgroundColor: '#00A0AB',
    },
  });
};

export const useCustomSwiperStyles = () => CustomSwiperStyles();
