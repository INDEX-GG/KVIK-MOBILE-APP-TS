import React, { FC, useMemo } from 'react';
import { useSwiperSlideStyles } from './style';
import { IMAGE_SERVER } from '../../../../constants/constants';
import FastImage from 'react-native-fast-image';
import { View } from 'react-native';
import SwiperLastSlide from '../SwiperLastSlide/SwiperLastSlide';
import ImageUI from '../../../../UI/ImageUI/ImageUI';

interface ISliderSlide {
  photo: string;
  slideIndex: number;
  lastSlideIndex: number;
  remainingPhotosCount: number;
  visibleLastSlide: boolean;
}

const SwiperSlide: FC<ISliderSlide> = ({
  photo,
  slideIndex,
  lastSlideIndex,
  remainingPhotosCount,
  visibleLastSlide,
}) => {
  const styles = useSwiperSlideStyles();
  const isLastSlide = useMemo(() => {
    if (!visibleLastSlide) {
      return false;
    }
    return slideIndex === lastSlideIndex - 1 && remainingPhotosCount;
  }, [slideIndex, lastSlideIndex]);

  return (
    <View style={styles.container}>
      <ImageUI photo={photo} />
      {isLastSlide ? (
        <SwiperLastSlide remainingPhotosCount={remainingPhotosCount} />
      ) : null}
    </View>
  );
};

export default React.memo(SwiperSlide);
