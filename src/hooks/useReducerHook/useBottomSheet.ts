import { useRef } from 'react';
import { Animated } from 'react-native';
import { useAppDispatch } from '../useAppDispatch';
import { bottomSheetSlice } from '../../store/reducers/bottomSheetSlice/bottomSheetSlice';

export const useBottomSheet = () => {
  const dispatch = useAppDispatch();
  const bottom = useRef(new Animated.Value(-230)).current;

  const AnimatedBottomSheet = (value: number, closeFunction?: () => void) => {
    Animated.timing(bottom, {
      toValue: value,
      duration: 150,
      useNativeDriver: false,
    }).start(() => (closeFunction ? closeFunction() : null));
  };

  const handleOpenBottomSheet = (elementHeight: number) => {
    return () => {
      dispatch(bottomSheetSlice.actions.openBottomSheet(elementHeight));
    };
  };

  const handleCloseBottomSheet = () => {
    dispatch(bottomSheetSlice.actions.closeBottomSheet());
  };

  return {
    bottomSheetPosition: bottom,
    AnimatedBottomSheet: AnimatedBottomSheet,
    handleOpenBottomSheet: handleOpenBottomSheet,
    handleCloseBottomSheet: handleCloseBottomSheet,
  };
};
