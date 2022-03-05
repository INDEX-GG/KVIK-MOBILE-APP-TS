import React, { FC } from 'react';
import { View } from 'react-native';
import { IAdCardModel } from '../../../models/IAdCardModel';
import { useCardAdItemStyles } from './style';
import RobotoText from '../../../UI/RobotoText';
import {
  ToRusDate,
  stringSlice,
  ToRubles,
  parsePhotos,
} from '../../../services/services';
import CustomSlider from '../CustomSlider/CustomSlider';

interface CardAdItemProps {
  adItem: IAdCardModel;
}

const CardAdItem: FC<CardAdItemProps> = ({ adItem }) => {
  const styles = useCardAdItemStyles();

  return (
    <View style={styles.item}>
      <View style={styles.img}>
        {/*<CustomSlider photos={parsePhotos(adItem.photo)} />*/}
      </View>
      <View style={styles.text}>
        <RobotoText weight="b" style={styles.price}>
          {ToRubles(adItem.price)}
        </RobotoText>
        <RobotoText weight="r" style={styles.title}>
          {stringSlice(adItem.title, 27)}
        </RobotoText>
        <RobotoText weight="m" style={styles.addressAndPrice}>
          {stringSlice(adItem.address, 32)}
        </RobotoText>
        <RobotoText weight="b" style={styles.addressAndPrice}>
          {ToRusDate(adItem.created_at)}
        </RobotoText>
      </View>
    </View>
  );
};

export default React.memo(CardAdItem);
