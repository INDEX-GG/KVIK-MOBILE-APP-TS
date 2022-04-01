import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useBottomSheetStore } from '../../hooks/useReducerHook/useBottomSheetStore';
import BottomSheetCustom from './BottomSheetCustom';
import { Modal, Pressable, View } from 'react-native';
import { useBottomSheetCustomStyles } from './styles';
import { useSize } from '../../hooks/useSize';

const BottomSheetModal: FC = () => {
  const styles = useBottomSheetCustomStyles();

  const { open, height } = useAppSelector((state) => state.bottomSheetReducer);
  const { deviceHeight } = useSize();
  const { handleCloseBottomSheet } = useBottomSheetStore();
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
          onPress={handleCloseBottomSheet}
          style={[
            styles.modalPressable,
            { height: deviceHeight - height - 10 },
          ]}
        />
        <BottomSheetCustom />
      </View>
    </Modal>
  );
};

export default React.memo(BottomSheetModal);
