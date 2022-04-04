import React, { FC, useEffect, useState } from 'react';
import BottomSheetCustomLocal from './BottomSheetCustomLocal';
import { Modal, Pressable, View } from 'react-native';
import { useBottomSheetCustomStyles } from '../BottomSheetCustom/styles';
import { useSize } from '../../hooks/useSize';

export interface IBottomSheetLocalProps {
  open: boolean;
  height: number;
  onClose: () => void;
  children: React.ReactChildren | React.ReactNode;
}

const BottomSheetModalLocal: FC<IBottomSheetLocalProps> = (props) => {
  const styles = useBottomSheetCustomStyles();
  const { open, height, onClose, children } = props;
  const { deviceHeight } = useSize();
  const [innerOpen, setInnerModal] = useState(false);

  useEffect(() => {
    if (open) {
      setInnerModal(true);
    } else {
      setInnerModal(false);
    }
  }, [open]);

  return (
    <Modal visible={innerOpen} transparent={true}>
      <View style={styles.modalWrapper}>
        <Pressable
          onPress={onClose}
          style={[
            styles.modalPressable,
            { height: deviceHeight - height - 10 },
          ]}
        />
        <BottomSheetCustomLocal
          open={open}
          height={height}
          onClose={onClose}
          children={children}
        />
      </View>
    </Modal>
  );
};

export default React.memo(BottomSheetModalLocal);
