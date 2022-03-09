import { StyleSheet } from 'react-native';

const ImageUIStyles = () => {
  return StyleSheet.create({
    img: {
      width: '100%',
      height: '100%',
    },
  });
};

export const useImageUIStyles = () => ImageUIStyles();
