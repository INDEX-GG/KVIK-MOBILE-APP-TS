import { useFormContext } from 'react-hook-form';
import { NumberType, onChangeText } from '../../types/types';
import { getOnlyNumberString } from '../../services/services';

export const useTextNumber = (number_version: NumberType) => {
  const { control } = useFormContext();
  const handleChangeText = (text: string, onChange: onChangeText,) => {
    onChange(getOnlyNumberString(text, number_version));
  };
  return {
    control,
    handleChangeText,
  };
};
