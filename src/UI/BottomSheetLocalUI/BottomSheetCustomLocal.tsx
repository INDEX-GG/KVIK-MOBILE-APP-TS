import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useBottomSheetCustomStyles } from '../BottomSheetCustom/styles';
import {
  GestureEvent,
  gestureHandlerRootHOC,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { IBottomSheetLocalProps } from './BottomSheetModalLocal';

const BottomSheetCustomLocal = gestureHandlerRootHOC<IBottomSheetLocalProps>(
  ({ open, height, onClose, children }) => {
    const styles = useBottomSheetCustomStyles();

    const bottom = useRef(new Animated.Value(-height)).current;

    const AnimatedBottomSheet = (value: number, closeFunction?: () => void) => {
      Animated.timing(bottom, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start(() => (closeFunction ? closeFunction() : null));
    };

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
        bottom.setValue(-event.nativeEvent.translationY);
      }
    };

    const onEnded = (event: any) => {
      if (event.nativeEvent.translationY > height / 3) {
        AnimatedBottomSheet(-height - 10, onClose);
      } else {
        AnimatedBottomSheet(0);
      }
    };

    return (
      <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onEnded}>
        <Animated.View
          style={[styles.root, { bottom: bottom, height: height }]}
        >
          <View style={styles.line} />
          {children}
        </Animated.View>
      </PanGestureHandler>
    );
  }
);

export default React.memo(BottomSheetCustomLocal);
