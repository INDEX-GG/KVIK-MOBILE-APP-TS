import { usePlaceOfferStore } from '../../../hooks/useReducerHook/usePlaceOfferStore';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const usePlaceOfferAdditionalFields = () => {
  const { additionFields } = usePlaceOfferStore();
  const methods = useForm();

  console.log(methods.watch());

  const isAdditionFieldsArray = useMemo(() => {
    return Array.isArray(additionFields) && additionFields.length;
  }, [additionFields]);

  return {
    methods,
    additionFields,
    isAdditionFieldsArray,
  };
};
