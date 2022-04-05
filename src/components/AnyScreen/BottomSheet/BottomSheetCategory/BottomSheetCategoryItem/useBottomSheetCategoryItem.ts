import { useMemo, useState } from 'react';
import { IPlaceOfferCategoryItem } from '../../../../../models/IPlaceOfferCategoryModel';
import { FieldValues, useFormContext, UseFormWatch } from 'react-hook-form';

interface ISelectCategoryState {
  name: string;
  data: IPlaceOfferCategoryItem[] | null;
}

export const useBottomSheetCategoryItem = (
  name: string,
  alias: string,
  watch: UseFormWatch<FieldValues>
) => {
  const [selectCategory, setSelectCategory] = useState<ISelectCategoryState>({
    name: '',
    data: null,
  });

  const { setValue } = useFormContext();

  const handleChangeCategory = (
    children: IPlaceOfferCategoryItem[],
    onChange: (alias: string | undefined) => void,
    value: string
  ) => {
    return () => {
      if (!children.length) {
        onChange(alias);
        setValue('category3', '');
        setSelectCategory({ name: alias, data: children });
        return;
      }
      if (value === alias) {
        setValue('category3', undefined);
        setValue('category2', undefined);
        setSelectCategory({ name: '', data: null });
        return;
      }
      onChange(alias);
      setValue('category3', undefined);
      setSelectCategory({ name: alias, data: children });
    };
  };

  const isVisibleCategory2 = useMemo(
    () =>
      selectCategory.data?.length &&
      selectCategory.data !== null &&
      watch('category2') === alias,
    [selectCategory, watch('category2')]
  );

  return {
    selectCategory,
    isVisibleCategory2,
    handleChangeCategory,
  };
};
