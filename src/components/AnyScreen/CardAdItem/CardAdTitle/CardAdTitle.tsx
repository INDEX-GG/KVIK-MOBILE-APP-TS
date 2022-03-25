import React, { FC } from 'react';
import { useCardAdTitleStyles } from './style';
import { stringSlice } from '../../../../services/services';
import RobotoText from '../../../../UI/RobotoText';

interface ICardAdTitleProps {
  title: string;
}

const CardAdTitle: FC<ICardAdTitleProps> = ({ title }) => {
  const styles = useCardAdTitleStyles();

  return (
    <RobotoText weight="r" style={styles.title}>
      {stringSlice(title, 26)}
    </RobotoText>
  );
};

export default React.memo(CardAdTitle);
