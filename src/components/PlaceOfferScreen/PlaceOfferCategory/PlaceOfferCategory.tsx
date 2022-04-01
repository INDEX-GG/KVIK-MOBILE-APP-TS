import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { usePlaceOfferCategory } from './usePlaceOfferCategory';
import PlaceOfferCategoryItem from './PlaceOfferCategoryItem/PlaceOfferCategoryItem';
import PlaceOfferBottomSheet from '../PlaceOfferBottomSheet/PlaceOfferBottomSheet';

const PlaceOfferCategory = () => {
  const { category, keyExtractor, getItemLayout, iconsCategory } =
    usePlaceOfferCategory();

  console.log(category);

  const renderItem = useCallback(
    ({ item, index }) => (
      <PlaceOfferCategoryItem
        key={item.alias}
        name={item.name}
        alias={item.alias}
        icon={iconsCategory[index]}
      />
    ),
    []
  );

  return (
    <>
      <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
      />
      {/*<PlaceOfferBottomSheet />*/}
    </>
  );
};

export default React.memo(PlaceOfferCategory);
