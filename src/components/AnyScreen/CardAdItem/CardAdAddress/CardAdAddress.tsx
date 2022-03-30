import React, { FC } from 'react';
import RobotoText from '../../../../UI/RobotoText';
import { useCardAdAddressStyles } from './style';
import { stringSlice } from '../../../../services/services';

interface ICardAdAddressProps {
  address: string;
}

const CardAdAddress: FC<ICardAdAddressProps> = ({ address }) => {
  const styles = useCardAdAddressStyles();

  return (
    <RobotoText weight="m" style={styles.address}>
      {stringSlice(address, 48)}
    </RobotoText>
  );
};

export default React.memo(CardAdAddress);
