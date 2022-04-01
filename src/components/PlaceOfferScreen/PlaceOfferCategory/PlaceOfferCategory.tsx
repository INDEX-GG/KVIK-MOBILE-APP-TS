import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { usePlaceOfferCategory } from './usePlaceOfferCategory';
import PlaceOfferCategoryItem from './PlaceOfferCategoryItem/PlaceOfferCategoryItem';

const PlaceOfferCategory = () => {
  const { category, keyExtractor, getItemLayout, iconsCategory } =
    usePlaceOfferCategory();

  const renderItem = useCallback(
    ({ item, index }) => (
      <PlaceOfferCategoryItem
        key={item.alias}
        name={item.name}
        alias={item.alias}
        children={item.children}
        icon={iconsCategory[index]}
      />
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
