import React, { useEffect, useMemo } from 'react';
import { Animated, View } from 'react-native';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { BottomSheetCustomStyles } from './styles';
import {
  GestureEvent,
  gestureHandlerRootHOC,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { useBottomSheet } from '../../hooks/useReducerHook/useBottomSheet';
import OverlayModal from '../OverlayModal/OverlayModal';

const BottomSheetCustom = gestureHandlerRootHOC(() => {
  const styles = BottomSheetCustomStyles();

  const { open, component, height } = useTypeSelector(
    (state) => state.bottomSheetReducer
  );
  const BottomSheet = useMemo(() => component, [component]);

  const { handleCloseBottomSheet, bottomSheetPosition, AnimatedBottomSheet } =
    useBottomSheet();

  useEffect(() => {
    if (open) {
      AnimatedBottomSheet(0);
    }
  }, [AnimatedBottomSheet, open]);

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

  return open && BottomSheet ? (
    <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onEnded}>
      <Animated.View style={[styles.root, { bottom: bottomSheetPosition }]}>
        <View style={styles.line} />
        <BottomSheet />
      </Animated.View>
    </PanGestureHandler>
  ) : null;
});

const BottomSheetModal = () => {
  const { open, height } = useTypeSelector((state) => state.bottomSheetReducer);
  const { handleCloseBottomSheet, AnimatedBottomSheet } = useBottomSheet();

  return (
    <OverlayModal
      visible={open}
      height={height}
      onCloseNoFocus={() =>
        AnimatedBottomSheet(-height - 10, handleCloseBottomSheet)
      }
    >
      <BottomSheetCustom />
    </OverlayModal>
  );
};

export default BottomSheetModal;
