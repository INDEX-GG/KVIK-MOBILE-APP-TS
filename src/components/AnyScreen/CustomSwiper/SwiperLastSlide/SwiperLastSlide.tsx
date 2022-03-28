import React, { FC } from 'react';
import { View } from 'react-native';
import { useSwiperLastSlideStyles } from './style';
import RobotoText from '../../../../UI/RobotoText';
import PhotoIcon from '../../../../assets/PhotoIcon.svg';

interface ISwiperLastSlideProps {
  remainingPhotosCount: number;
}

const SwiperLastSlide: FC<ISwiperLastSlideProps> = ({
  remainingPhotosCount,
}) => {
  const styles = useSwiperLastSlideStyles();

  return (
    <View style={styles.lastSlide}>
      <View style={styles.iconBox}>
        <PhotoIcon />
      </View>
      <RobotoText weight="r" style={styles.text}>
        Еще {remainingPhotosCount} фото
      </RobotoText>
    </View>
  );
};

export default React.memo(SwiperLastSlide);
