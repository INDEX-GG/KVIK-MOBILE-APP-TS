import { useMemo } from 'react';
import { findDependenciesInFormValues } from '../../../../services/services';
import { useWatch } from 'react-hook-form';
import { PlaceOfferAdditionalFields } from '../../../../models/IAdditionalFieldsModel';

export const useAdditionFieldsItem = (type: PlaceOfferAdditionalFields, dependencies: string[] | undefined) => {

  const formValues = useWatch() as any;

  const isTextList = useMemo(() => type === 'text_list', [type]);
  const isText = useMemo(() => type === 'text', [type]);
  const isNumber = useMemo(() => type === 'number', [type]);
  const isCheckList = useMemo(() => type === 'check_list', [type]);
  const isPeriod = useMemo(() => type === 'period', [type]);
  const isBoolean = useMemo(() => type === 'boolean', [type]);
  const isTime = useMemo(() => type === 'text_list_time', [type]);

  // Показывает компонент
  const isVisible = useMemo(() => {
    if (Array.isArray(dependencies)) {
      return findDependenciesInFormValues(dependencies, formValues);
    }
    return true;
  }, [formValues]);

  return {
    isText,
    isTime,
    isNumber,
    isPeriod,
    isVisible,
    isBoolean,
    isTextList,
    isCheckList,
  };
};
