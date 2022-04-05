import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { usePlaceOfferCategory } from './usePlaceOfferCategory';
import PlaceOfferCategoryItem from './PlaceOfferCategoryItem/PlaceOfferCategoryItem';
import BottomSheetModalLocal from '../../../UI/BottomSheetLocalUI/BottomSheetModalLocal';
import BottomSheetCategory from '../../AnyScreen/BottomSheet/BottomSheetCategory/BottomSheetCategory';
import { useFormContext } from 'react-hook-form';

const PlaceOfferCategory = () => {
  const {
    category,
    currentCategory,
    keyExtractor,
    getItemLayout,
    iconsCategory,
    bottomSheetLength,
    handleChangeCurrentCategory,
  } = usePlaceOfferCategory();

  const { watch } = useFormContext();

  console.log(watch());

  const renderItem = useCallback(
    ({ item, index }) => (
      <PlaceOfferCategoryItem
        key={item.alias}
        name={item.name}
        alias={item.alias}
        children={item.children}
        icon={iconsCategory[index]}
        handleChangeCurrentCategory={handleChangeCurrentCategory}
      />
    ),
    []
  );

  return (
    <View>
      <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
      />
      {currentCategory ? (
        <BottomSheetModalLocal
          open={!!currentCategory.length}
          height={bottomSheetLength(currentCategory.length, 55)}
          onClose={handleChangeCurrentCategory(false)}
        >
          <BottomSheetCategory category={currentCategory} />
        </BottomSheetModalLocal>
      ) : null}
    </View>
  );
};

export default React.memo(PlaceOfferCategory);
