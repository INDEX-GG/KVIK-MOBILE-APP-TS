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
import { useSize } from '../../../hooks/useSize';
import { useFormContext } from 'react-hook-form';

export const usePlaceOfferCategory = () => {
  const { deviceHeight } = useSize();
  const { setValue } = useFormContext();
  const [currentCategory, setCurrentCategory] = useState<
    IPlaceOfferCategoryItem[] | false
  >(false);
  const [category, setCategory] = useState<IPlaceOfferCategoryItem[]>();

  const handleChangeCurrentCategory = (
    state: IPlaceOfferCategoryItem[] | false
  ) => {
    return () => {
      setCurrentCategory(state);
      if (!state) {
        setValue('category1', undefined);
        setValue('category2', undefined);
        setValue('category3', undefined);
      }
    };
  };

  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
    []
  );

  const bottomSheetLength = (allElement: number, sizeOneElement: number) => {
    const height = allElement * sizeOneElement;
    const maxHeight = deviceHeight - 200;
    const minHeight = 140;
    if (height > maxHeight) {
      return maxHeight;
    }
    if (height < minHeight) {
      return minHeight;
    }
    return height;
  };

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
    currentCategory,
    bottomSheetLength,
    handleChangeCurrentCategory,
  };
};
