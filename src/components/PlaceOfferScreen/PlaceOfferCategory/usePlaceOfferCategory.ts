import React, { useCallback, useEffect, useState } from 'react';
import { kvikAxiosV2 } from '../../../http/customAxios';
import {
  IPlaceOfferCategoryItem,
  IPlaceOfferCategoryModel,
} from '../../../models/IPlaceOfferCategoryModel';
import CardAdItem from '../../AnyScreen/CardAdItem/CardAdItem';

export const usePlaceOfferCategory = () => {
  const [category, setCategory] = useState<IPlaceOfferCategoryItem[]>();

  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
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
    try {
      kvikAxiosV2
        .get<IPlaceOfferCategoryModel>('placeOfferJson/new_catalog.json')
        .then((jsonData) => setCategory(jsonData.data.category));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    category,
    keyExtractor,
    getItemLayout,
  };
};
