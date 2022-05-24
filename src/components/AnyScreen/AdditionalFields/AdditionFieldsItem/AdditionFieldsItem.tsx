import React, { FC } from 'react';
import {
  IAdditionalFieldsItem,
  ITextAdditionalFields,
  ITextListAdditionalFields, ITextNumberAdditionalFields,
} from '../../../../models/IAdditionalFieldsModel';
import TextListUI from '../../../../UI/TextListUI/TextListUI';
import TextUI from '../../../../UI/TextUI/TextUI';
import { useAdditionFieldsItem } from './useAdditionFieldsItem';
import TextNumberUI from '../../../../UI/TextNumberUI/TextNumberUI';

const AdditionFieldsItem: FC<IAdditionalFieldsItem> = (props) => {
  const { type, dependencies } = props;

  const {
    isText,
    isNumber,
    isTextList,
    isVisible,
  } = useAdditionFieldsItem(type, dependencies);

  return (
    isVisible ? (
      <>
        {isTextList && (
          <TextListUI
            {...props as IAdditionalFieldsItem & ITextListAdditionalFields}
          />
        )}
        {isText && (
          <TextUI
            {...props as IAdditionalFieldsItem & ITextAdditionalFields}
          />
        )}
        {isNumber && (
          <TextNumberUI
            {...props as IAdditionalFieldsItem & ITextNumberAdditionalFields}
          />
        )}
      </>
    ) : null
  );
};

export default React.memo(AdditionFieldsItem);
