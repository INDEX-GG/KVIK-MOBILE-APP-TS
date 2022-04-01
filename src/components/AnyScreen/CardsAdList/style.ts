import { StyleSheet } from 'react-native';
import { useSize } from '../../../hooks/useSize';
import { useDevice } from '../../../hooks/useDevice';

const CardAdList = () => {
  const { deviceWidth } = useSize();
  const { isAndroid } = useDevice();

  return StyleSheet.create({
    container: {
      marginHorizontal: 0,
    },
    headerComponentStyle: {
      zIndex: 10,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      elevation: 11,
    },
    wrapper: {
      width: deviceWidth - 30,
      justifyContent: 'space-between',
      marginHorizontal: 15,
    },
  });
};

export const useCardAdListStyles = () => CardAdList();
