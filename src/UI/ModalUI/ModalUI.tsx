import React, { FC } from 'react';
import { useModalUIStyles } from './style';
import { Overlay } from 'react-native-elements';

interface IModalUIProps {
  children: React.ReactChildren | React.ReactNode;
  isVisible: boolean;
  onBackdropPress?: () => void;
}

const ModalUI: FC<IModalUIProps> = ({
  isVisible,
  children,
  onBackdropPress,
}) => {
  const styles = useModalUIStyles();

  return (
    <Overlay
      overlayStyle={styles.overlay}
      backdropStyle={styles.backdrop}
      fullScreen={false}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
    >
      {children}
    </Overlay>
  );
};

export default React.memo(ModalUI);
