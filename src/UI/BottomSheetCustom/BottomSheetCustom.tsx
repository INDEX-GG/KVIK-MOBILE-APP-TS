import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { useBottomSheetCustomStyles } from './styles';
import {
  GestureEvent,
  gestureHandlerRootHOC,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { useBottomSheetStore } from '../../hooks/useReducerHook/useBottomSheetStore';
import { useAppSelector } from '../../hooks/useAppSelector';
import BottomSheetContent from './BottomSheetContent';

const BottomSheetCustom = gestureHandlerRootHOC(() => {
  const styles = useBottomSheetCustomStyles();
  const { open, height, componentName, componentData } = useAppSelector(
    (state) => state.bottomSheetReducer
  );
  const { handleCloseBottomSheet, bottomSheetPosition, AnimatedBottomSheet } =
    useBottomSheetStore();

  useEffect(() => {
    if (open) {
      setTimeout(() => AnimatedBottomSheet(0), 100);
    }
    if (!open) {
      setTimeout(() => AnimatedBottomSheet(-height - 10), 100);
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
    if (event.nativeEvent.translationY > height / 3) {
      AnimatedBottomSheet(-height - 10, handleCloseBottomSheet);
    } else {
      AnimatedBottomSheet(0);
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onEnded}>
      <Animated.View
        style={[styles.root, { bottom: bottomSheetPosition, height: height }]}
      >
        <View style={styles.line} />
        <BottomSheetContent
          componentName={componentName}
          componentData={componentData}
        />
      </Animated.View>
    </PanGestureHandler>
  );
});

export default React.memo(BottomSheetCustom);
