import React from 'react';
import { View } from 'react-native';
import FillButton from '../../UI/FillButton/FillButton';
import { useRouter } from '../../hooks/useRouter';

const PlaceOfferScreen = () => {
  const { pushTo } = useRouter();

  return (
    <View>
      <FillButton
        title={'Новое объявление'}
        onPress={pushTo('PlaceOfferNewAd')}
      />
    </View>
  );
};

export default React.memo(PlaceOfferScreen);
