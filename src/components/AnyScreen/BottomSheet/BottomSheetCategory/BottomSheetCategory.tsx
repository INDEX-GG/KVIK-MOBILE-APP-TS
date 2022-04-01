import React, { FC, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';
import BottomSheetCategoryItem from './BottomSheetCategoryItem/BottomSheetCategoryItem';
import { useBottomSheetCategory } from './BottomSheetCategoryItem/useBottomSheetCategory';

interface IBottomSheetCategoryProps {
  category: IPlaceOfferCategoryItem[];
}

const BottomSheetCategory: FC<IBottomSheetCategoryProps> = ({ category }) => {
  const {} = useBottomSheetCategory();

  const isCategory = useMemo(
    () => Array.isArray(category) && category?.length,
    [category]
  );

  return isCategory ? (
    <FlatList data={category} renderItem={} keyExtractor={} getItemLayout={} />
  ) : null;
};

export default React.memo(BottomSheetCategory);
