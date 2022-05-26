import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMoreAdditionalFields } from '../../store/reducers/placeOfferSlice/asyncThunk/placeOferApi';
import { useAppSelector } from '../../hooks/useAppSelector';
import { usePlaceOfferStore } from '../../hooks/useReducerHook/usePlaceOfferStore';
import { KVIK_COLOR } from '../../constants/constants';

type booleanType = boolean | undefined

export const useTextListUI = (
  text_list_values: string[],
  dependencies: string[] | undefined,
  json: string | undefined,
  alias: string,
  isCheckList: booleanType,
  isPeriod: booleanType,
  isTime: booleanType
) => {
  const dispatch = useAppDispatch();
  const formValues = useWatch() as any;
  const { control, getValues, setValue } = useFormContext();
  const { getPlaceOfferJsonChildren } = usePlaceOfferStore();
  const { jsonInfo } = useAppSelector(state => state.placeOfferReducer);
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);

  // Список элементов в BottomSheet
  const flatListData = useMemo(() => {
    if (jsonInfo && dependencies && !isCheckList && !isPeriod && !isTime) {
      return getPlaceOfferJsonChildren(
        jsonInfo,
        dependencies,
        getValues,
        alias,
      );
    }
    return text_list_values;
  }, [jsonInfo, text_list_values]);

  // Списко с одним выбором
  const isSingleFlatListData = useMemo(() => {
    return flatListData?.length === 1;
  }, [flatListData]);

  const arrowStyle = useMemo(() => (
    {
      transform: {transform: [{rotate: `${openBottomSheet ? 270 : 0}deg`}]},
      color: {color: openBottomSheet ? KVIK_COLOR : '#8F8F8F'},
    }
  ), [openBottomSheet]);

  const handleToggleBottomSheet = () => {
    setOpenBottomSheet((prevState) => !prevState);
  };

  const getDynamicColor = useCallback((item) => (
    openBottomSheet ? KVIK_COLOR : item
  ), [openBottomSheet]);

  // Поиск внешнего json
  useEffect(() => {
    if (!isCheckList) {
      if (json && dependencies) {
        const jsonName = formValues[dependencies[0]];
        const isGetJson = dependencies.length === 1;
        if (jsonName && isGetJson) {
          dispatch(fetchMoreAdditionalFields({jsonName}));
        }
      }
    }
  }, [formValues]);

  // Автозаполнение едининчных полей (1 возможный выбор)
  useEffect(() => {
    if (!isCheckList) {
      if (Array.isArray(flatListData)) {
        const fieldValue = getValues(alias);
        if (isSingleFlatListData && fieldValue !== flatListData[0]) {
          setValue(alias, flatListData[0]);
        }
      }
    }
  }, [flatListData]);

  return {
    control,
    arrowStyle,
    flatListData,
    getDynamicColor,
    openBottomSheet,
    isSingleFlatListData,
    handleToggleBottomSheet,
  };
};
