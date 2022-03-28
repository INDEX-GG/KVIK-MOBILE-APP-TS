import React, { FC, useMemo } from 'react';
import { useSecret } from '../../../hooks/useSecret';
import Swiper from 'react-native-swiper';
import SliderSlide from './SwiperSlide/SwiperSlide';
import { useDevice } from '../../../hooks/useDevice';
import { useCustomSwiperStyles } from './style';
import { Pressable } from 'react-native';

interface ICustomSwiperProps {
  photos: string[];
  remainingPhotosCount: number;
  visibleLastSlide: boolean;
  onPressSlide?: () => void;
}

const CustomSwiper: FC<ICustomSwiperProps> = ({
  photos,
  remainingPhotosCount,
  visibleLastSlide,
  onPressSlide,
}) => {
  const styles = useCustomSwiperStyles();
  const isPhotos = useMemo(() => photos?.length, [photos]);

  const { uniqueKeyMap } = useSecret();
  const { isIos } = useDevice();

  return (
    <>
      <Swiper
        loop={false}
        index={0}
        showsButtons={false}
        loadMinimal={true}
        bounces={isIos}
        dotStyle={styles.dot}
        activeDotStyle={styles.active}
        paginationStyle={styles.pagination}
      >
        {isPhotos
          ? photos.map((photo, index) => (
              <Pressable key={uniqueKeyMap(photo)} onPress={onPressSlide}>
                <SliderSlide
                  photo={photo}
                  slideIndex={index}
                  lastSlideIndex={photos.length}
                  remainingPhotosCount={remainingPhotosCount}
                  visibleLastSlide={visibleLastSlide}
                />
              </Pressable>
            ))
          : null}
      </Swiper>
    </>
  );
};

export default React.memo(CustomSwiper);
