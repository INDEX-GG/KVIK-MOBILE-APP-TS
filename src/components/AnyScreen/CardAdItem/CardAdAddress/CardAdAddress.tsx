import React, { FC } from 'react';
import RobotoText from '../../../../UI/RobotoText';
import { stringSlice } from '../../../../services/services';
import { useCardAdAddressStyles } from './style';

interface ICardAdAddressProps {
  address: string;
}

const CardAdAddress: FC<ICardAdAddressProps> = ({ address }) => {
  const styles = useCardAdAddressStyles();

  return (
    <RobotoText weight="m" style={styles.address}>
      {stringSlice(address, 32)}
    </RobotoText>
  );
};

export default React.memo(CardAdAddress);
