import { usePlaceOfferStore } from '../../../hooks/useReducerHook/usePlaceOfferStore';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { placeOfferSlice } from '../../../store/reducers/placeOfferSlice/placeOfferSlice';

export const usePlaceOfferAdditionalFields = () => {
  const { additionFields } = usePlaceOfferStore();
  const methods = useForm();
  const dispatch = useAppDispatch();

  const isAdditionFieldsArray = useMemo(() => {
    return Array.isArray(additionFields) && additionFields.length;
  }, [additionFields]);

  useEffect(() => {
    return () => {
      dispatch(placeOfferSlice.actions.reset());
    };
  }, []);

  return {
    methods,
    additionFields,
    isAdditionFieldsArray,
  };
};
