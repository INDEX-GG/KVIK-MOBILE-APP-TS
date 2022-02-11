import React, { useEffect, useMemo } from 'react';
import { Animated, Modal, View } from 'react-native';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { BottomSheetCustomStyles } from './styles';
import {
  gestureHandlerRootHOC,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import { useBottomSheet } from '../../hooks/useReducerHook/useBottomSheet';
import { Overlay } from 'react-native-elements';

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

  const onGestureEvent = (event: any) => {
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

  console.log(height);

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
  return open ? (
    <Overlay
      backdropStyle={{
        opacity: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
      }}
      overlayStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '100%',
        padding: 0,
        margin: 0,
        height: height,
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
      onBackdropPress={() => AnimatedBottomSheet(-height)}
      transparent={true}
      isVisible={open}
      fullScreen={true}
      style={{ zIndex: 0 }}
    >
      <BottomSheetCustom />
    </Overlay>
  ) : null;
};

export default BottomSheetModal;
