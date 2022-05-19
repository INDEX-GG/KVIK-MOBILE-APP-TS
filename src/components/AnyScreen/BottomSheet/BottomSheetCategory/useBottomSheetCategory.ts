import { useCallback, useMemo } from 'react';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';
import { checkArray } from '../../../../services/services';

export const useBottomSheetCategory = (category: IPlaceOfferCategoryItem[]) => {
  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
    []
  );

  const isCategory = useMemo(() => checkArray(category), [category]);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 50,
      offset: 50 * index,
      index,
    }),
    []
  );

  return {
    isCategory,
    keyExtractor,
    getItemLayout,
  };
};
