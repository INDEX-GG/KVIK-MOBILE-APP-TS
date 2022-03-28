import React, { FC } from 'react';
import RobotoText from '../../../../UI/RobotoText';
import { useCardAdAddressStyles } from './style';
import { useSize } from '../../../../hooks/useSize';

interface ICardAdAddressProps {
  address: string;
}

const CardAdAddress: FC<ICardAdAddressProps> = ({ address }) => {
  const styles = useCardAdAddressStyles();
  const { wordSlice } = useSize();

  return (
    <RobotoText weight="m" style={styles.address}>
      {wordSlice(address, 48)}
    </RobotoText>
  );
};

export default React.memo(CardAdAddress);
