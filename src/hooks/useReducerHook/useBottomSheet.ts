import { BottomSheetType } from '../../store/reducers/bottomSheetReducer';
import { useTypedDispatch } from '../useTypedDispatch';
import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { useTypeSelector } from '../useTypedSelector';

export const useBottomSheet = () => {
  const { height } = useTypeSelector((state) => state.bottomSheetReducer);
  const dispatch = useTypedDispatch();
  const bottom = useRef(new Animated.Value(-height)).current;

  const AnimatedBottomSheet = (value: number, closeFunction?: () => void) => {
    Animated.timing(bottom, {
      toValue: value,
      duration: 150,
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
    };
  };

  const handleCloseBottomSheet = () => {
    dispatch({
      type: BottomSheetType.IS_CLOSE,
      payload: { height: -height },
    });
  };

  return {
    bottomSheetPosition: bottom,
    AnimatedBottomSheet: AnimatedBottomSheet,
    handleOpenBottomSheet: handleOpenBottomSheet,
    handleCloseBottomSheet: handleCloseBottomSheet,
  };
};
