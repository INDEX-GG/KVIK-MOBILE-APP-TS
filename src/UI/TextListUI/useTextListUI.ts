import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useSize } from '../../hooks/useSize';
import { findDependenciesInFormValues, generateBottomSheetHeight } from '../../services/services';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMoreAdditionalFields } from '../../store/reducers/placeOfferSlice/asyncThunk/placeOferApi';
import { useAppSelector } from '../../hooks/useAppSelector';

export const useTextListUI = (
  text_list_values: string[],
  dependencies: string[] | undefined,
  json: string | undefined
) => {
  const { control } = useFormContext();
  const formValues = useWatch() as any;
  const { deviceHeight } = useSize();
  const dispatch = useAppDispatch();
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const { jsonInfo } = useAppSelector(state => state.placeOfferReducer);

  const isVisible = useMemo(() => {
    if (Array.isArray(dependencies)) {
      return findDependenciesInFormValues(dependencies, formValues);
    }
    return true;
  }, [formValues]);

  const isTextListArray = useMemo(() => {
    return Array.isArray(text_list_values) && text_list_values.length;
  },[text_list_values]);

  const flatListData = useMemo(() => {
    if (jsonInfo && dependencies) {
      return ['ok'];
    }
    return text_list_values;
  }, [jsonInfo, text_list_values]);

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
    };
  };

  const bottomSheetItemHeight = () => {
    const textListValueLength = text_list_values?.length ? text_list_values?.length : 0;
    return generateBottomSheetHeight(textListValueLength, 55, deviceHeight);
  };

  const keyExtractor = useCallback(
    (item, index) => `${item}${index}`,
    []
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 55,
      offset: 55 * index,
      index,
    }),
    []
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
    bottomSheetItemHeight,
    handleToggleBottomSheet,
  };
};
