import React, { FC } from 'react';
import { useCardAdTitleStyles } from './style';
import RobotoText from '../../../../UI/RobotoText';
// import { useSize } from '../../../../hooks/useSize';
import { stringSlice } from '../../../../services/services';

interface ICardAdTitleProps {
  title: string;
}

const CardAdTitle: FC<ICardAdTitleProps> = ({ title }) => {
  const styles = useCardAdTitleStyles();
  // const { wordSlice } = useSize();

  return (
    <RobotoText weight="b" style={styles.title}>
      {stringSlice(title, 26)}
    </RobotoText>
  );
};

export default React.memo(CardAdTitle);
