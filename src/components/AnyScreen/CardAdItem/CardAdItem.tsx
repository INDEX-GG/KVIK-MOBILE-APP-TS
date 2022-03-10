import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { useCardAdItemStyles } from './style';
import RobotoText from '../../../UI/RobotoText';
import {
  ToRusDate,
  stringSlice,
  ToRubles,
  // parsePhotos,
} from '../../../services/services';
import { useRouter } from '../../../hooks/useRouter';
// import CustomSlider from '../CustomSlider/CustomSlider';

interface CardAdItemProps {
  adItem: IAdCardModel;
}

const CardAdItem: FC<CardAdItemProps> = ({ adItem }) => {
  const styles = useCardAdItemStyles();
  const { pushTo } = useRouter();

  return (
    <TouchableOpacity style={styles.item} onPress={pushTo('Product')}>
      <View style={styles.img}>
        {/*<CustomSlider photos={parsePhotos(adItem.photo)} />*/}
      </View>
      <View style={styles.text}>
        <RobotoText weight="b" style={styles.price}>
          {ToRubles(adItem.price)}
        </RobotoText>
        <RobotoText weight="r" style={styles.title}>
          {stringSlice(adItem.title, 26)}
        </RobotoText>
        <RobotoText weight="m" style={styles.addressAndPrice}>
          {stringSlice(adItem.address, 32)}
        </RobotoText>
        <RobotoText weight="b" style={styles.addressAndPrice}>
          {ToRusDate(adItem.created_at)}
        </RobotoText>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CardAdItem);
