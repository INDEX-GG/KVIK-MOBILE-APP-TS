import { StyleSheet } from 'react-native';
import { useDevice } from '../../hooks/useDevice';
import { useSize } from '../../hooks/useSize';

const ModalUIStyles = () => {
  const { deviceWidth, deviceHeight } = useSize();

  return StyleSheet.create({
    overlay: {
      // backgroundColor: 'rgba(0, 0, 0, 0)',
      zIndex: -1,
      // width: deviceWidth,
      // height: deviceHeight,
    },
    backdrop: {
      position: 'absolute',
      zIndex: -1,
      backgroundColor: 'blue',
    },
  });
};

export const useModalUIStyles = () => ModalUIStyles();
