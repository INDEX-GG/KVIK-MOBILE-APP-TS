import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useBottomSheet } from '../../hooks/useReducerHook/useBottomSheet';
import React, { useEffect, useState } from 'react';
import OverlayModal from '../OverlayModal/OverlayModal';
import BottomSheetCustom from './BottomSheetCustom';

const BottomSheetModal = () => {
  const { height, open } = useTypeSelector((state) => state.bottomSheetReducer);
  const { handleCloseBottomSheet } = useBottomSheet();
  const [innerOpen, setInnerModal] = useState(false);

  useEffect(() => {
    if (open) {
      setInnerModal(true);
    }

    if (!open && innerOpen) {
      setTimeout(() => {
        setInnerModal(false);
      }, 150);
    }
  }, [innerOpen, open]);


  return (
    <OverlayModal
      visible={innerOpen}
      height={height}
      onCloseNoFocus={handleCloseBottomSheet}
    >
      <BottomSheetCustom />
    </OverlayModal>
  );
};

export default React.memo(BottomSheetModal);
