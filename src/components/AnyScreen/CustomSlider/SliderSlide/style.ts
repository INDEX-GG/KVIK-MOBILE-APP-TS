import { StyleSheet } from 'react-native';

const SliderSlideStyles = () => {
  return StyleSheet.create({
    image: {
      width: '100%',
      height: '100%',
    },
  });
};

export const useSliderSlideStyles = () => SliderSlideStyles();
