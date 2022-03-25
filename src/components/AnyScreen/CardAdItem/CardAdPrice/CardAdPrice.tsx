import React, { FC } from 'react';
import { useCardAdPriceStyles } from './style';
import RobotoText from '../../../../UI/RobotoText';
import { ToRubles } from '../../../../services/services';

interface ICardAdPriceProps {
  price: string;
}

const CardAdPrice: FC<ICardAdPriceProps> = ({ price }) => {
  const styles = useCardAdPriceStyles();

  return (
    <RobotoText weight="b" style={styles.price}>
      {ToRubles(price)}
    </RobotoText>
  );
};

export default React.memo(CardAdPrice);
