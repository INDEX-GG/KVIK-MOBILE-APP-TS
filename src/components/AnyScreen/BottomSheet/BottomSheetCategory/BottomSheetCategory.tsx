import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';
import BottomSheetCategoryItem from './BottomSheetCategoryItem/BottomSheetCategoryItem';
import { checkArray } from '../../../../services/services';
import { useBottomSheetCategory } from './useBottomSheetCategory';

interface IBottomSheetCategoryProps {
  category: IPlaceOfferCategoryItem[];
}

const BottomSheetCategory: FC<IBottomSheetCategoryProps> = ({ category }) => {
  const { keyExtractor, getItemLayout } = useBottomSheetCategory();

  const isCategory = useMemo(() => checkArray(category), [category]);

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
