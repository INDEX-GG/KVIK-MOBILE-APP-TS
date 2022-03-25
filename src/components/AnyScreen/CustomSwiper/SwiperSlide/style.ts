import { StyleSheet } from 'react-native';

const SwiperSlideStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    lastSlide: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 100,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(39, 39, 39, 0.8)',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
};

export const useSwiperSlideStyles = () => SwiperSlideStyles();
