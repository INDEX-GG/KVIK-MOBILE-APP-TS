import React, { FC, useMemo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { useCardAdItemStyles } from './style';
import { useRouter } from '../../../hooks/useRouter';
import CardAdAddress from './CardAdAddress/CardAdAddress';
import CardAdDate from './CardAdDate/CardAdDate';
import CardAdPrice from './CardAdPrice/CardAdPrice';
import CardAdTitle from './CardAdTitle/CardAdTitle';
import CardAdPhoto from './CardAdPhoto/CardAdPhoto';
import CardAdLike from './CardAdLike/CardAdLike';

interface CardAdItemProps {
  adItem: IAdCardModel;
}

const CardAdItem: FC<CardAdItemProps> = ({ adItem }) => {
  const styles = useCardAdItemStyles();
  const { pushTo } = useRouter();

  const isPhoto = useMemo(() => !!adItem?.post_photo_v2, [adItem]);

  const handlePressAd = () => {
    pushTo('LocationSearch')();
  };

  return (
    <View style={styles.item}>
      <CardAdLike />
      {isPhoto ? (
        <CardAdPhoto
          photos={adItem.post_photo_v2}
          adId={adItem.id}
          onPress={handlePressAd}
        />
      ) : (
        <View>
          <Text>Фото не найденно</Text>
        </View>
      )}
      <Pressable style={styles.text} onPress={handlePressAd}>
        <CardAdPrice price={adItem.price} />
        <CardAdTitle title={adItem.title} />
        <CardAdAddress address={adItem.address} />
        <CardAdDate date={adItem.created_at} />
      </Pressable>
    </View>
  );
};

export default React.memo(CardAdItem);
