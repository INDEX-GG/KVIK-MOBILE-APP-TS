import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { dynamicPhotosArr } from '../../../../services/services';
import { useCardAdPhotoStyles } from './style';
import CustomSwiper from '../../CustomSwiper/CustomSwiper';
import ImageUI from '../../../../UI/ImageUI/ImageUI';

interface ICardAdPhotoProps {
  photos: string[];
  adId: number;
  onPress: () => void;
}

const CardAdPhoto: FC<ICardAdPhotoProps> = ({ photos, adId, onPress }) => {
  const styles = useCardAdPhotoStyles();

  const photosArr = useMemo(
    () => dynamicPhotosArr([photos[0]], adId, 's', 5),
    [adId]
  );

  // const remainingPhotosCount = useMemo(() => {
  //   if (Array.isArray(photos) && Array.isArray(photosArr)) {
  //     return photos.length - photosArr.length;
  //   }
  //   return 0;
  // }, [photos, photosArr]);

  return (
    <View style={styles.img}>
      {/*<CustomSwiper*/}
      {/*  photos={photosArr}*/}
      {/*  remainingPhotosCount={remainingPhotosCount}*/}
      {/*  visibleLastSlide={true}*/}
      {/*  onPressSlide={onPress}*/}
      {/*/>*/}
      <ImageUI photo={photosArr[0]} />
    </View>
  );
};

export default React.memo(CardAdPhoto);
