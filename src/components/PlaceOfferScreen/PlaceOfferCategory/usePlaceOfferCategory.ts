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
import { generateBottomSheetHeight } from '../../../services/services';
import { usePlaceOfferStore } from '../../../hooks/useReducerHook/usePlaceOfferStore';
import { useRouter } from '../../../hooks/useRouter';

export const usePlaceOfferCategory = () => {
  const { deviceHeight } = useSize();
  const { handleSelectCategory } = usePlaceOfferStore();
  const { pushTo } = useRouter();
  const { setValue, reset, watch } = useFormContext();
  const formValues = watch() as IFormStatePlaceOfferCategory;
  const [category, setCategory] = useState<IPlaceOfferCategoryItem[]>();
  const [currentCategory, setCurrentCategory] = useState<
    IPlaceOfferCategoryItem[] | false
  >(false);

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

  const handleResetForm = () => {
    reset({
      category1: undefined,
      category2: undefined,
      category3: undefined,
      category1Length: undefined,
      category2Length: undefined,
      additionalFields: null,
    } as IFormStatePlaceOfferCategory);
  };

  const handleChangeCurrentCategory = (
    state: IPlaceOfferCategoryItem[] | false
  ) => {
    return () => {
      setCurrentCategory(state);
      if (!state) {
        handleResetForm();
      }
    };
  };

  const category2Length = useMemo(() => {
    if (formValues?.category2Length) {
      return formValues.category2Length;
    }
    return 0;
  }, [formValues]);

  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
    []
  );

  const bottomSheetHeight = (allElement: number, sizeOneElement: number) => {
    return generateBottomSheetHeight(allElement, sizeOneElement, deviceHeight);
  };

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 50,
      offset: 50 * index,
      index,
    }),
    []
  );

  const handleSuccessSelectCategory = () => {
    handleResetForm();
    setCurrentCategory(false);
    pushTo('PlaceOfferAdditionalFields')();
  };

  useEffect(() => {
    try {
      kvikAxiosV2
        .get<IPlaceOfferCategoryModel>('placeOfferJson/new_catalog.json')
        .then((jsonData) => {
          setCategory(jsonData.data.category);
          setValue('category1Length', jsonData.data.category?.length);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (currentCategory) {
      handleSelectCategory(
        formValues,
        currentCategory,
        handleSuccessSelectCategory
      );
    }
  }, [formValues]);

  return {
    category,
    iconsCategory,
    keyExtractor,
    category2Length,
    getItemLayout,
    currentCategory,
    bottomSheetHeight,
    handleChangeCurrentCategory,
  };
};
