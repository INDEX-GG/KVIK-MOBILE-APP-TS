import { StyleSheet } from 'react-native';

const CardAdPhotoStyles = () => {
  return StyleSheet.create({
    img: {
      width: '100%',
      height: 163,
      borderRadius: 8,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      overflow: 'hidden',
    },
  });
};

export const useCardAdPhotoStyles = () => CardAdPhotoStyles();
