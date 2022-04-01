import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { usePlaceOfferCategory } from './usePlaceOfferCategory';
import PlaceOfferCategoryItem from './PlaceOfferCategoryItem/PlaceOfferCategoryItem';

const PlaceOfferCategory = () => {
  const { category, keyExtractor, getItemLayout } = usePlaceOfferCategory();

  console.log(category);

  const renderItem = useCallback(
    ({ item, index }) => (
      <PlaceOfferCategoryItem key={item.alias}/>
    ),
    []
  );

  return (
    <FlatList
      data={category}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
    />
  );
};

export default React.memo(PlaceOfferCategory);
