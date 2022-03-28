import { StyleSheet } from 'react-native';

const SwiperSlideStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
};

export const useSwiperSlideStyles = () => SwiperSlideStyles();
