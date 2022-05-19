import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';
import BottomSheetCategoryItem from './BottomSheetCategoryItem/BottomSheetCategoryItem';
import { useBottomSheetCategory } from './useBottomSheetCategory';

interface IBottomSheetCategoryProps {
  category: IPlaceOfferCategoryItem[];
}

const BottomSheetCategory: FC<IBottomSheetCategoryProps> = ({ category }) => {
  const { keyExtractor, getItemLayout, isCategory } =
    useBottomSheetCategory(category);

  const renderItem = useCallback(
    ({ item }) => (
      <BottomSheetCategoryItem
        key={item.alias}
        title={item?.title}
        name={item.name}
        alias={item.alias}
        children={item.children}
        additional_fields={item.additional_fields}
      />
    ),
    []
  );

  return isCategory ? (
    <FlatList
      data={category}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
    />
  ) : null;
};

export default React.memo(BottomSheetCategory);
