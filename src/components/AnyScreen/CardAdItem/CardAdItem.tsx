import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { useCardAdItemStyles } from './style';
import { useRouter } from '../../../hooks/useRouter';
import CardAdAddress from './CardAdAddress/CardAdAddress';
import CardAdDate from './CardAdDate/CardAdDate';
import CardAdPrice from './CardAdPrice/CardAdPrice';
import CardAdTitle from './CardAdTitle/CardAdTitle';
import CardAdPhoto from './CardAdPhoto/CardAdPhoto';
import CustomSlider from '../CustomSwiper/CustomSwiper';
import { parsePhotos } from '../../../services/services';
// import CustomSwiper from '../CustomSwiper/CustomSwiper';

interface CardAdItemProps {
  adItem: IAdCardModel;
}

const CardAdItem: FC<CardAdItemProps> = ({ adItem }) => {
  const styles = useCardAdItemStyles();
  const { pushTo } = useRouter();

  return (
    <View style={styles.item}>
      <CardAdPhoto photos={adItem.post_photo_v2} adId={adItem.id} />
      <View style={styles.text}>
        <CardAdPrice price={adItem.price} />
        <CardAdTitle title={adItem.title} />
        <CardAdAddress address={adItem.address} />
        <CardAdDate date={adItem.created_at} />
      </View>
    </View>
  );
};

export default React.memo(CardAdItem);
