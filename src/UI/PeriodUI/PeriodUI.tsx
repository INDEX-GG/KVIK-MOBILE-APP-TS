import React, { FC } from 'react';
import { IPeriodUIProps } from '../../models/IAdditionalFieldsModel';
import TextListUI from '../TextListUI/TextListUI';
import { usePeriodUI } from './usePeriodUI';

const PeriodUI: FC<IPeriodUIProps> = (props) => {

  const {
    yearArray,
  } = usePeriodUI();


  return (
    <TextListUI
      {...props}
      isPeriod={true}
      text_list_values={yearArray}
    />
  );
};

export default React.memo(PeriodUI);
