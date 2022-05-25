import { useFormContext } from 'react-hook-form';
import { onChangeText } from '../../types/types';

export const useTextUI = () => {
  const { control } = useFormContext();

  const handleChangeText = (text: string, onChange: onChangeText,) => {
    onChange(text);
  };

  return {
    control,
    handleChangeText,
  };
};
