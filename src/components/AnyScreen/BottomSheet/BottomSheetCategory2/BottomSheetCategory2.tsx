import React, { FC, useCallback } from 'react';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';
import { FlatList } from 'react-native-gesture-handler';
import { useBottomSheetCategory2 } from './useBottomSheetCategory2';
import BottomSheetCategory2Item from './BottomSheetCategory2Item/BottomSheetCategory2Item';

interface IBottomSheetCategory2Props {
  category: IPlaceOfferCategoryItem[];
}

const BottomSheetCategory2: FC<IBottomSheetCategory2Props> = ({ category }) => {
  const { keyExtractor, getItemLayout } = useBottomSheetCategory2(category);

  const renderItem = useCallback(
    ({ item }) => (
      <BottomSheetCategory2Item
        key={item.name}
        title={item.title}
        name={item.name}
        alias={item.alias}
        additional_fields={item.additional_fields}
      />
    ),
    []
  );

  return (
    <FlatList
      data={category}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      keyExtractor={keyExtractor}
    />
  );
};

export default React.memo(BottomSheetCategory2);
