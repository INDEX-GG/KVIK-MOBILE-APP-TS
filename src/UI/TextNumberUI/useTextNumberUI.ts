import { useFormContext } from 'react-hook-form';
import { NumberType, onChangeText } from '../../types/types';
import { getOnlyNumberString } from '../../services/services';
import { useSize } from '../../hooks/useSize';

export const useTextNumber = (number_version: NumberType) => {
  const { control } = useFormContext();
  const { deviceWidth }  = useSize();
  const handleChangeText = (text: string, onChange: onChangeText,) => {
    onChange(getOnlyNumberString(text, number_version));
  };
  const generateAfterString = (stringLength: number | undefined) => {
    if (typeof stringLength === 'number') {
      const defaultLeft = 30;
      const dynamicLength = 9.5 * stringLength;
      const finalLength = defaultLeft + dynamicLength;
      if (finalLength < deviceWidth - 20) {
        return finalLength;
      }
      return deviceWidth - 25;
    }
  };
  return {
    control,
    generateAfterString,
    handleChangeText,
  };
};
