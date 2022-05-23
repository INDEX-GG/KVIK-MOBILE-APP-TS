import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useSize } from '../../hooks/useSize';
import {
  findDependenciesInFormValues,
  generateBottomSheetHeight,
  getPlaceOfferJsonChildren,
} from '../../services/services';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMoreAdditionalFields } from '../../store/reducers/placeOfferSlice/asyncThunk/placeOferApi';
import { useAppSelector } from '../../hooks/useAppSelector';

export const useTextListUI = (
  text_list_values: string[],
  dependencies: string[] | undefined,
  json: string | undefined,
  alias: string,
) => {
  const { control, getValues, setValue } = useFormContext();
  const formValues = useWatch() as any;
  const { deviceHeight } = useSize();
  const dispatch = useAppDispatch();
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const { jsonInfo, additionFields } = useAppSelector(state => state.placeOfferReducer);

  const isVisible = useMemo(() => {
    if (Array.isArray(dependencies)) {
      return findDependenciesInFormValues(dependencies, formValues);
    }
    return true;
  }, [formValues]);

  const flatListData = useMemo(() => {
    if (jsonInfo && dependencies) {
      return getPlaceOfferJsonChildren(
        jsonInfo,
        dependencies,
        getValues,
        alias,
      );
    }
    return text_list_values;
  }, [jsonInfo, text_list_values]);

  const isSingleFlatListData = useMemo(() => {
    return flatListData?.length === 1;
  }, [flatListData]);


  const isTextListArray = useMemo(() => {
    return !!(Array.isArray(flatListData) && flatListData.length);
  },[flatListData]);

  const arrowStyle = useMemo(() => (
    {transform: [{rotate: `${openBottomSheet ? 270 : 0}deg`}]}
  ), [openBottomSheet]);

  const handleToggleBottomSheet = () => {
    setOpenBottomSheet((prevState) => !prevState);
  };

  const handleSelectItem = (onChange: (state: string) => void, newState: string) => {
    return () => {
      onChange(newState);
      setOpenBottomSheet(false);
      const additionFieldsLength = additionFields ? additionFields.length : 0;
      for (let i = 0; i < additionFieldsLength; i++) {
        const dependenciesArray = additionFields[i]?.dependencies;
        if (dependenciesArray) {
          const findDependencies = dependenciesArray.find(item => item === alias);
          if (findDependencies) {
            setValue(additionFields[i].alias, undefined);
          }
        }
      }
    };
  };


  const bottomSheetItemHeight = () => {
    const textListValueLength = flatListData?.length ? flatListData.length : 0;
    return generateBottomSheetHeight(textListValueLength, 55, deviceHeight);
  };

  const keyExtractor = useCallback(
    (item, index) => `${item}${index}`,
    [flatListData]
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 55,
      offset: 55 * index,
      index,
    }),
    [flatListData]
  );

  useEffect(() => {
    if (json && dependencies && isVisible) {
      const jsonName = formValues[dependencies[0]];
      const isGetJson = dependencies.length === 1;
      if (jsonName && isGetJson) {
        dispatch(fetchMoreAdditionalFields({jsonName}));
      }
    }
  }, [isVisible, formValues]);

  useEffect(() => {
    if (Array.isArray(flatListData)) {
      const fieldValue = getValues(alias);
      if (isSingleFlatListData && fieldValue !== flatListData[0]) {
        console.log(flatListData[0]);
        setValue(alias, flatListData[0]);
      }
    }
  }, [flatListData]);

  return {
    control,
    isVisible,
    arrowStyle,
    keyExtractor,
    flatListData,
    getItemLayout,
    isTextListArray,
    openBottomSheet,
    handleSelectItem,
    isSingleFlatListData,
    bottomSheetItemHeight,
    handleToggleBottomSheet,
  };
};
