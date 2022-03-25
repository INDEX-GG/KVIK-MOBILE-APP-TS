import { StyleSheet } from 'react-native';

const CardAdPhotoStyles = () => {
  return StyleSheet.create({
    img: {
      width: '100%',
      height: 163,
    },
  });
};

export const useCardAdPhotoStyles = () => CardAdPhotoStyles();
