import { StyleSheet } from 'react-native';

const SwiperLastSlideStyles = () => {
  return StyleSheet.create({
    lastSlide: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 100,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(39, 39, 39, 0.5)',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    iconBox: {
      marginBottom: 5,
    },
    text: {
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 14,
      color: '#ffffff',
    },
  });
};

export const useSwiperLastSlideStyles = () => SwiperLastSlideStyles();
