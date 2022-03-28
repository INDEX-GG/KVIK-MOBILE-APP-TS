import React from 'react';
import { TouchableOpacity } from 'react-native';
import LikeIcon from '../../../../assets/LikeIcon.svg';
import { useCardAdLikeStyles } from './style';

const CardAdLike = () => {
  const styles = useCardAdLikeStyles();

  return (
    <TouchableOpacity style={styles.likeIcon}>
      <LikeIcon />
    </TouchableOpacity>
  );
};

export default React.memo(CardAdLike);
