import React, { FC, useMemo } from 'react';
import { IAdditionalFieldsItem } from '../../../../models/IAdditionalFieldsModel';
import TextListUI from '../../../../UI/TextListUI/TextListUI';

const AdditionFieldsItem: FC<IAdditionalFieldsItem> = (props) => {
  const { type } = props;
  const isTextList = useMemo(() => type === 'text_list', [type]);

  return (
    <>
      {isTextList && (
        <TextListUI
          {...props}
        />
      )}
    </>
  );
};

export default React.memo(AdditionFieldsItem);
