import React, { FC } from 'react';
import { Overlay } from 'react-native-elements';
import { OverlayModalStyles } from './style';
import { Modal } from 'react-native';

interface OverlayModalProps {
  children: React.ReactChildren | React.ReactNode;
  visible: boolean;
  height?: number | 'auto';
  onCloseNoFocus: () => void;
}

const OverlayModal: FC<OverlayModalProps> = ({
  visible,
  height,
  onCloseNoFocus,
  children,
}) => {
  const styles = OverlayModalStyles();

  return (
    <Overlay
      isVisible={visible}
      backdropStyle={styles.backdropStyle}
      overlayStyle={[styles.overlayStyle, { height: height }]}
      onBackdropPress={onCloseNoFocus}
      transparent={true}
      fullScreen={true}
    >
      {children}
    </Overlay>
  );
};

export default OverlayModal;
