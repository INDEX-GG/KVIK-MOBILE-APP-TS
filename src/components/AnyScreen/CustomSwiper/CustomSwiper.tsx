import React, { FC, useMemo } from 'react';
import { useSecret } from '../../../hooks/useSecret';
import Swiper from 'react-native-swiper';
import SliderSlide from './SwiperSlide/SwiperSlide';
import { useDevice } from '../../../hooks/useDevice';
import { useCustomSwiperStyles } from './style';

interface ICustomSwiperProps {
  photos: string[];
}

const CustomSwiper: FC<ICustomSwiperProps> = ({ photos }) => {
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
          ? photos.map((photo) => (
              <SliderSlide key={uniqueKeyMap(photo)} photo={photo} />
            ))
          : null}
      </Swiper>
    </>
  );
};

export default React.memo(CustomSwiper);
