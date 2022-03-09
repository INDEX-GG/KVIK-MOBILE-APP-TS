import React, { FC, useMemo } from 'react';
// import { useCustomSliderStyles } from './style';
import { useSecret } from '../../../hooks/useSecret';
import Swiper from 'react-native-swiper';
import SliderSlide from './SliderSlide/SliderSlide';

interface ISlider {
  photos: string[];
}

const CustomSlider: FC<ISlider> = ({ photos }) => {
  // const styles = useCustomSliderStyles();
  const isPhotos = useMemo(() => photos?.length, [photos]);
  const { uniqueKeyMap } = useSecret();

  return (
    <Swiper>
      {isPhotos
        ? photos.map((photo) => (
            <SliderSlide key={uniqueKeyMap(photo)} photo={photo} />
          ))
        : null}
    </Swiper>
  );
};

export default React.memo(CustomSlider);
