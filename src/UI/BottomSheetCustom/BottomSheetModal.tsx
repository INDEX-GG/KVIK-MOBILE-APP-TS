import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useBottomSheetStore } from '../../hooks/useReducerHook/useBottomSheetStore';
import BottomSheetCustom from './BottomSheetCustom';
import { Modal, Pressable, View } from 'react-native';
import { useBottomSheetCustomStyles } from './styles';

const BottomSheetModal = () => {

  const styles = useBottomSheetCustomStyles();

  const { open } = useAppSelector((state) => state.bottomSheetReducer);
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
          style={styles.modalPressable}
        />
        <BottomSheetCustom />
      </View>
    </Modal>
  );
};

export default React.memo(BottomSheetModal);
