import React, { FC } from 'react';
import { useSliderSlideStyles } from './style';
import { IMAGE_SERVER } from '../../../../constants/constants';
import FastImage from 'react-native-fast-image';

interface ISliderSlide {
  photo: string;
}

const SliderSlide: FC<ISliderSlide> = ({ photo }) => {
  const styles = useSliderSlideStyles();

  return (
    <FastImage
      style={styles.image}
      source={{
        uri: IMAGE_SERVER + photo,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default React.memo(SliderSlide);
