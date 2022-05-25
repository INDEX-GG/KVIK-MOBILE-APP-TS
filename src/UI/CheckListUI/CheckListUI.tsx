import React, { FC } from 'react';
import TextListUI from '../TextListUI/TextListUI';
import { ICheckListUIProps } from '../../models/IAdditionalFieldsModel';

const CheckListUI: FC<ICheckListUIProps> = (props) => {
  const { check_list_values } = props;
  return (
    <TextListUI
      {...props}
      isCheckList={true}
      text_list_values={check_list_values}
    />
  );
};

export default React.memo(CheckListUI);
