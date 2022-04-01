import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { usePlaceOfferCategoryItemStyles } from './style';

const PlaceOfferCategoryItem = () => {
  const styles = usePlaceOfferCategoryItemStyles();


  return (
    <TouchableOpacity>
      <Text>1</Text>
    </TouchableOpacity>
  );
};

export default React.memo(PlaceOfferCategoryItem);
