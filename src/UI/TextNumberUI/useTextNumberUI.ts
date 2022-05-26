import { useFormContext } from 'react-hook-form';
import { onChangeText } from '../../types/types';
import { getOnlyNumberString } from '../../services/services';
import { ITextNumberUIProps } from '../../models/IAdditionalFieldsModel';
import { useMemo } from 'react';

export const useTextNumber = (data: ITextNumberUIProps) => {
  const { control } = useFormContext();
  const { number_version, title, number_unit_of_measure } = data;
  const handleChangeText = (text: string, onChange: onChangeText,) => {
    onChange(getOnlyNumberString(text, number_version));
  };

  const placeholderTitle = useMemo(() => (
    `${title}${number_unit_of_measure ? `, ${number_unit_of_measure}` : ''}`
  ), [title, number_unit_of_measure]);

  return {
    control,
    placeholderTitle,
    handleChangeText,
  };
};
