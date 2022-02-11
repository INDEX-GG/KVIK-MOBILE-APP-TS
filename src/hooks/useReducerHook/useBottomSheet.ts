import { BottomSheetType } from '../../store/reducers/bottomSheetReducer';
import { useTypedDispatch } from '../useTypedDispatch';
import React, { useRef } from 'react';
import { Animated } from 'react-native';

export const useBottomSheet = () => {
  const dispatch = useTypedDispatch();
  const bottom = useRef(new Animated.Value(-220)).current;

  const AnimatedBottomSheet = (value: number, closeFunction?: () => void) => {
    Animated.timing(bottom, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start(() => (closeFunction ? closeFunction() : null));
  };

  const handleOpenBottomSheet = (
    component: React.FC,
    elementHeight: number
  ) => {
    return () => {
      dispatch({
        type: BottomSheetType.IS_OPEN,
        payload: {
          component: component,
          height: elementHeight,
        },
      });
      AnimatedBottomSheet(0);
    };
  };

  const handleCloseBottomSheet = () => {
    dispatch({
      type: BottomSheetType.IS_CLOSE,
      payload: { component: undefined, height: -0 },
    });
  };

  return {
    bottomSheetPosition: bottom,
    AnimatedBottomSheet: AnimatedBottomSheet,
    handleOpenBottomSheet: handleOpenBottomSheet,
    handleCloseBottomSheet: handleCloseBottomSheet,
  };
};
