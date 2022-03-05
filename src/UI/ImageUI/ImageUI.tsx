import React, { FC } from 'react';
import FastImage, { ImageStyle } from 'react-native-fast-image';
import { StyleProp } from 'react-native';
import { useImageUIStyles } from './style';

interface ImageUIProps {
  photo: string;
  imageStyle?: StyleProp<ImageStyle>;
}

const ImageUI: FC<ImageUIProps> = ({ photo, imageStyle = {} }) => {
  const styles = useImageUIStyles();

  return (
    <FastImage
      style={[styles.img, imageStyle]}
      source={{
        uri: photo,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default React.memo(ImageUI);
