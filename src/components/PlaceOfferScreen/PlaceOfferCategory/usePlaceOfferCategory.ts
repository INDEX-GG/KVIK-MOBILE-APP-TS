import { useCallback, useEffect, useMemo, useState } from 'react';
import { kvikAxiosV2 } from '../../../http/customAxios';
import {
  IPlaceOfferCategoryItem,
  IPlaceOfferCategoryModel,
} from '../../../models/IPlaceOfferCategoryModel';
import RealEstateIcon from '../../../assets/RealEstateIcon.svg';
import AutoIcon from '../../../assets/AutoIcon.svg';
import ConsumerElectronicIcon from '../../../assets/ConsumerElectronicsIcon.svg';
import WorkIcon from '../../../assets/WorkIcon.svg';
import BusinessIcon from '../../../assets/BusinessIcon.svg';
import ForHomeIcon from '../../../assets/ForHomeIcon.svg';
import AnimalIcon from '../../../assets/AnimalIcon.svg';
import PersonalItemIcon from '../../../assets/PersonalItemIcon.svg';
import ServicesIcon from '../../../assets/ServicesIcon.svg';
import HobbyIcon from '../../../assets/HobbyIcon.svg';

export const usePlaceOfferCategory = () => {
  const [category, setCategory] = useState<IPlaceOfferCategoryItem[]>();

  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
    []
  );

  const iconsCategory = useMemo(
    () => [
      RealEstateIcon,
      AutoIcon,
      ConsumerElectronicIcon,
      ForHomeIcon,
      WorkIcon,
      AnimalIcon,
      ServicesIcon,
      PersonalItemIcon,
      BusinessIcon,
      HobbyIcon,
    ],
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
    iconsCategory,
    keyExtractor,
    getItemLayout,
  };
};
