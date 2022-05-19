import { useCallback, useEffect, useMemo } from 'react';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';
import { useFormContext } from 'react-hook-form';

export const useBottomSheetCategory2 = (
  category: IPlaceOfferCategoryItem[]
) => {
  const { setValue } = useFormContext();
  const categoryLength = useMemo(() => {
    if (Array.isArray(category) && category.length) {
      return category.length;
    }
    return undefined;
  }, [category]);

  const keyExtractor = useCallback(
    (item, index) => `${item.alisa}${index}`,
    []
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 50,
      offset: 50 * index,
      index,
    }),
    []
  );

  useEffect(() => {
    setValue('category2Length', categoryLength);
    return () => {
      setValue('category2Length', undefined);
    };
  }, [categoryLength]);

  return {
    keyExtractor,
    getItemLayout,
  };
};
