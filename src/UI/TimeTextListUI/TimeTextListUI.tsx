import React, { FC } from 'react';
import { ITextListUIProps } from '../../models/IAdditionalFieldsModel';
import TextListUI from '../TextListUI/TextListUI';
import { useTimeTextListUI } from './useTimeTextListUI';

const TimeTextListUI: FC<ITextListUIProps> = (props) => {

  const { dateArr } = useTimeTextListUI();

  console.log(dateArr);

  return (
    <TextListUI
      {...props}
      isTime={true}
      text_list_values={dateArr}
    />
  );
};

export default React.memo(TimeTextListUI);
