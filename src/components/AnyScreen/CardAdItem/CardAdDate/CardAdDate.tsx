import React, { FC } from 'react';
import { useCardAdDateStyles } from './style';
import RobotoText from '../../../../UI/RobotoText';
import { ToRusDate } from '../../../../services/services';

interface ICardAdDateProps {
  date: string;
}

const CardAdDate: FC<ICardAdDateProps> = ({ date }) => {
  const styles = useCardAdDateStyles();

  return (
    <RobotoText weight="b" style={styles.date}>
      {ToRusDate(date)}
    </RobotoText>
  );
};

export default React.memo(CardAdDate);
