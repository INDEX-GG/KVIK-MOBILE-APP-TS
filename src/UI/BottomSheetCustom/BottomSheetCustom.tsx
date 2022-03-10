import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { useBottomSheetCustomStyles } from './styles';
import {
  GestureEvent,
  gestureHandlerRootHOC,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { useBottomSheet } from '../../hooks/useReducerHook/useBottomSheet';
import { useAppSelector } from '../../hooks/useAppSelector';
import BottomSheetAuth from './BottomSheetAuth/BottomSheetAuth';

const BottomSheetCustom = gestureHandlerRootHOC(() => {
  const styles = useBottomSheetCustomStyles();

  const { open } = useAppSelector((state) => state.bottomSheetReducer);

  const { handleCloseBottomSheet, bottomSheetPosition, AnimatedBottomSheet } =
    useBottomSheet();

  useEffect(() => {
    if (open) {
      setTimeout(() => AnimatedBottomSheet(0), 100);
    }
    if (!open) {
      setTimeout(() => AnimatedBottomSheet(-240), 100);
    }
  }, [open]);

  const onGestureEvent = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ) => {
    if (event.nativeEvent.translationY > 0) {
      bottomSheetPosition.setValue(-event.nativeEvent.translationY);
    }
  };

  const onEnded = (event: any) => {
    if (event.nativeEvent.translationY > 230 / 3) {
      AnimatedBottomSheet(-240, handleCloseBottomSheet);
    } else {
      AnimatedBottomSheet(0);
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onEnded}>
      <Animated.View style={[styles.root, { bottom: bottomSheetPosition }]}>
        <View style={styles.line} />
        <BottomSheetAuth />
      </Animated.View>
    </PanGestureHandler>
  );
});

export default React.memo(BottomSheetCustom);
