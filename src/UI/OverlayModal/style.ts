import { StyleSheet } from 'react-native';

export const OverlayModalStyles = () => {
  return StyleSheet.create({
    backdropStyle: {
      opacity: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'flex-end',
    },
    overlayStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: '100%',
      padding: 0,
      margin: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      elevation: 0,
      zIndex: 1,
    },
  });
};
