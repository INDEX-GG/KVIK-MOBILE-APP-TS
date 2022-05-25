import { useFormContext } from 'react-hook-form';
import { onChangeText } from '../../types/types';
import { getOnlyNumberString } from '../../services/services';
import { ITextNumberUIProps } from '../../models/IAdditionalFieldsModel';

export const useTextNumber = (number_version: Omit<ITextNumberUIProps, 'number_version'>) => {
  const { control } = useFormContext();
  const handleChangeText = (text: string, onChange: onChangeText,) => {
    console.log(number_version);
    onChange(getOnlyNumberString(text));
  };
  return {
    control,
    handleChangeText,
  };
};
