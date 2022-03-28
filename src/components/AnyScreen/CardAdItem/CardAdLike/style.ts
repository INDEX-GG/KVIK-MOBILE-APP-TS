import { StyleSheet } from 'react-native';

const CardAdLikeStyles = () => {
  return StyleSheet.create({
    likeIcon: {
      position: 'absolute',
      right: 5,
      top: 5,
      zIndex: 10,
    },
  });
};

export const useCardAdLikeStyles = () => CardAdLikeStyles();
