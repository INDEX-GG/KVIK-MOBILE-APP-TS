import { useAppSelector } from '../useAppSelector';
import { useAppDispatch } from '../useAppDispatch';
import { placeOfferSlice } from '../../store/reducers/placeOfferSlice/placeOfferSlice';
import { IPlaceOfferCategoryItem } from '../../models/IPlaceOfferCategoryModel';
import { IAdditionalFieldsItem } from '../../models/IAdditionalFieldsModel';

export const usePlaceOfferStore = () => {
  const {
    aliasOne,
    aliasTwo,
    aliasFull,
    aliasThree,
    additionFields,
    aliasName,
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

  return {
    aliasOne,
    aliasTwo,
    aliasThree,
    aliasFull,
    additionFields,
    aliasName,
    handleSelectCategory,
    handleChangePlaceOfferState,
  };
};
