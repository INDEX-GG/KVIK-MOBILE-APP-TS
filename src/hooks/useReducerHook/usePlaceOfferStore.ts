import { useAppSelector } from '../useAppSelector';
import { useAppDispatch } from '../useAppDispatch';
import { placeOfferSlice } from '../../store/reducers/placeOfferSlice/placeOfferSlice';
import { IPlaceOfferCategoryItem } from '../../models/IPlaceOfferCategoryModel';
import { IAdditionalFieldsFetchJSON, IAdditionalFieldsItem } from '../../models/IAdditionalFieldsModel';
import { FieldValues, UseFormGetValues } from 'react-hook-form';
import { getStringArrayInObjectArray } from '../../services/services';

export const usePlaceOfferStore = () => {
  const {
    aliasOne,
    aliasTwo,
    aliasFull,
    aliasThree,
    additionFields,
    aliasName,
    lastJsonInfo,
  } = useAppSelector((state) => state.placeOfferReducer);
  const dispatch = useAppDispatch();

  const checkCategory = (category: string) => (category ? `,${category}` : '');

  const handleSelectCategory = (
    formValues: IFormStatePlaceOfferCategory,
    currentCategory: IPlaceOfferCategoryItem[],
    handleSuccessSelectCategory: () => void,
  ) => {
    if (formValues) {
      if (
        formValues.category1 !== undefined &&
        formValues.category2 !== undefined &&
        formValues.category3 !== undefined
      ) {
        const alias1 = formValues.category1;
        const alias2 = formValues.category2;
        const alias3 = formValues.category3;
        let categoryName = '';
        let innerAdditionalFields: IAdditionalFieldsItem[] = [];
        if (currentCategory) {
          const innerCategoryItem = currentCategory.find(
            (item) => item.alias === alias2
          );
          if (innerCategoryItem) {
            categoryName = innerCategoryItem.name;
            const additionalFieldsOne = innerCategoryItem.additional_fields;
            if (additionalFieldsOne?.length) {
              innerAdditionalFields = additionalFieldsOne;
            } else {
              const innerCategoryItemTwo = innerCategoryItem?.children?.find(
                (item) => item.alias === alias3
              );
              if (innerCategoryItemTwo) {
                innerAdditionalFields = innerCategoryItemTwo.additional_fields;
              }
            }
          }
          handleChangePlaceOfferState(
            alias1,
            alias2,
            alias3,
            innerAdditionalFields,
            categoryName,
            handleSuccessSelectCategory
          );
        }
      }
    }
  };

  const handleChangePlaceOfferState = (
    categoryOne: string,
    categoryTwo: string,
    categoryThree: string,
    additionalFields: any[],
    categoryName: string,
    successCallback: () => void
  ) => {
    const categoryFullString = `${categoryOne}${checkCategory(
      categoryTwo
    )}${checkCategory(categoryThree)}`;
    dispatch(
      placeOfferSlice.actions.handleChangeState({
        aliasOne: categoryOne,
        aliasTwo: categoryTwo,
        aliasThree: categoryThree,
        aliasFull: categoryFullString,
        additionFields: additionalFields,
        aliasName: categoryName,
      })
    );
    successCallback();
  };


  // Получение финальных полей (тип двигателя, мощность)
  const getFourChildren = (childrenArray: IAdditionalFieldsFetchJSON[], alias: string) => {
    if (Array.isArray(childrenArray)) {
      const currentChildren = childrenArray.find(item => item.alias === alias);
      // Записываем последнюю вложенность полей
      dispatch(placeOfferSlice.actions.handleChangeLastChildJson(childrenArray))
      if (currentChildren) {
        return Array.from(currentChildren.value);
      }
    }
    return [];
  };

  const getPlaceOfferJsonChildren = (
    jsonObject: IAdditionalFieldsFetchJSON,
    dependencies: string[],
    getValue: UseFormGetValues<FieldValues>,
    alias: string,
  ) => {
    let returnArray = [];
    const dependenciesLength = dependencies.length;
    if (jsonObject && dependenciesLength) {
      const innerChildrenOne = jsonObject?.children;
      // Первая вложенность
      if (dependenciesLength === 1 && innerChildrenOne) {
        returnArray = getStringArrayInObjectArray(innerChildrenOne, 'value');
      }
      // Вторая вложенность
      if (dependenciesLength > 1 && innerChildrenOne) {
        const twoDependencies = dependencies[1];
        const findValueTwo = getValue(twoDependencies);
        if (findValueTwo) {
          const innerChildrenTwo = innerChildrenOne.find(item => item.value === findValueTwo)?.children;
          if (innerChildrenTwo) {
            // Возвращаем вторую вложенность
            if (dependenciesLength === 2) {
              returnArray = getStringArrayInObjectArray(innerChildrenTwo, 'value');
            }
            // Третья вложенность
            if (dependenciesLength > 2) {
              const threeDependencies = dependencies[2];
              const findValueThree = getValue(threeDependencies);
              if (findValueThree) {
                const innerChildrenThree = innerChildrenTwo.find(item => item.value === findValueThree)?.children;
                if (innerChildrenThree) {
                  returnArray = getStringArrayInObjectArray(innerChildrenThree, 'value');
                  // Четвертая вложенность
                  if (dependenciesLength > 3) {
                    const fourDependencies = dependencies[3];
                    const findValueFour = getValue(fourDependencies);
                    if (findValueFour) {
                      const innerChildrenFour = innerChildrenThree.find(item => item.value === findValueFour)?.children;
                      if (innerChildrenFour) {
                        returnArray = getFourChildren(innerChildrenFour, alias);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return returnArray;
  };

  return {
    aliasOne,
    aliasTwo,
    aliasThree,
    aliasFull,
    lastJsonInfo,
    additionFields,
    aliasName,
    getPlaceOfferJsonChildren,
    handleSelectCategory,
    handleChangePlaceOfferState,
  };
};
