import { useCallback, useMemo, useState } from 'react';
import { generateBottomSheetHeight } from '../../../services/services';
import { useSize } from '../../../hooks/useSize';
import { usePlaceOfferStore } from '../../../hooks/useReducerHook/usePlaceOfferStore';
import { useFormContext } from 'react-hook-form';

export const useTextListBottomSheet = (flatListData: any[], alias:string, isCheckList: boolean | undefined) => {
  const { deviceHeight } = useSize();
  const { setValue } = useFormContext();
  const { additionFields } = usePlaceOfferStore();
  const [search, setSearch] = useState('');

  const isVisibleSearch = useMemo(() => (
    Array.isArray(flatListData) && flatListData.length > 5
  ), [flatListData]);

  const isTextListArray = useMemo(() => {
    return !!(Array.isArray(flatListData) && flatListData.length);
  },[flatListData]);

  const bottomSheetItemHeight = () => {
    const textListValueLength = flatListData?.length ? flatListData.length : 0;
    const moreHeight = isVisibleSearch ? 50 : 0;
    return generateBottomSheetHeight(
      textListValueLength,
      60,
      deviceHeight,
      moreHeight + 55
    );
  };

  const handleChangeSearch = (text: string) => {
    setSearch(text);
  };


  const handleSelectItem = (
    onChange: (state: string | string[] | undefined) => void,
    newState: string,
    currentState: string | string[] | null | undefined,
  ) => {
    return () => {
      if (!isCheckList) {
        onChange(newState);
        // Очистка зависимых полей
        const additionFieldsLength = additionFields ? additionFields.length : 0;
        for (let i = 0; i < additionFieldsLength; i++) {
          const dependenciesArray = additionFields[i]?.dependencies;
          if (dependenciesArray) {
            const findDependencies = dependenciesArray.find((item: any) => item === alias);
            if (findDependencies) {
              setValue(additionFields[i].alias, undefined);
            }
          }
        }
      }
      if (isCheckList) {
        if (Array.isArray(currentState)) {
          const isPushState = !!currentState.find(item => item === newState);
          if (!isPushState) {
            onChange([...currentState, newState]);
          } else {
            const filterArray = currentState.filter(item => item !== newState);
            onChange(filterArray.length ? filterArray : undefined);
          }
          return;
        }
        onChange([newState]);
      }
    };
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

  return {
    search,
    keyExtractor,
    getItemLayout,
    isVisibleSearch,
    isTextListArray,
    handleChangeSearch,
    handleSelectItem,
    bottomSheetItemHeight,
  };
};
