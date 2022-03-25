import React, { FC } from 'react';
import { useSwiperSlideStyles } from './style';
import { IMAGE_SERVER } from '../../../../constants/constants';
import FastImage from 'react-native-fast-image';
import { View } from 'react-native';
import RobotoText from '../../../../UI/RobotoText';

interface ISliderSlide {
  photo: string;
}

const SwiperSlide: FC<ISliderSlide> = ({ photo }) => {
  const styles = useSwiperSlideStyles();

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: IMAGE_SERVER + photo,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.lastSlide} />
    </View>
  );
};

export default React.memo(SwiperSlide);
