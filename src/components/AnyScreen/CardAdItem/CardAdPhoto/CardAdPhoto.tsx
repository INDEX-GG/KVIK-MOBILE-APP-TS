import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { dynamicPhotosArr } from '../../../../services/services';
import { useCardAdPhotoStyles } from './style';
import CustomSwiper from '../../CustomSwiper/CustomSwiper';

interface ICardAdPhotoProps {
  photos: string[];
  adId: number;
}

const CardAdPhoto: FC<ICardAdPhotoProps> = ({ photos, adId }) => {
  const photosArr = useMemo(
    () => dynamicPhotosArr(photos, adId, 's', 5),
    [adId]
  );
  const styles = useCardAdPhotoStyles();

  return (
    <View style={styles.img}>
      <CustomSwiper photos={photosArr} />
    </View>
  );
};

export default React.memo(CardAdPhoto);
