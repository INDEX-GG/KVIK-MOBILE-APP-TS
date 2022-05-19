import { useRef } from 'react';
import { Animated } from 'react-native';
import { useAppDispatch } from '../useAppDispatch';
import {
  BottomSheetComponentName,
  bottomSheetSlice,
} from '../../store/reducers/bottomSheetSlice/bottomSheetSlice';
import { useAppSelector } from '../useAppSelector';

export const useBottomSheetStore = () => {
  const { height } = useAppSelector((state) => state.bottomSheetReducer);
  const dispatch = useAppDispatch();
  const bottom = useRef(new Animated.Value(-height)).current;

  const AnimatedBottomSheet = (value: number, closeFunction?: () => void) => {
    Animated.timing(bottom, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start(() => (closeFunction ? closeFunction() : null));
  };

  const handleOpenBottomSheet = (
    elementHeight: number,
    componentName: BottomSheetComponentName,
    componentData: Object = {}
  ) => {
    return () => {
      dispatch(
        bottomSheetSlice.actions.openBottomSheet({
          height: elementHeight,
          componentName,
          componentData,
        })
      );
    };
  };

  const handleCloseBottomSheet = () => {
    dispatch(bottomSheetSlice.actions.closeBottomSheet(-height));
  };

  const handleAddHeightBottomSheet = (moreHeight: number) => {
    // dispatch(bottomSheetSlice.actions.addMoreHeight(moreHeight));
    AnimatedBottomSheet(moreHeight);
  };

  return {
    bottomSheetPosition: bottom,
    AnimatedBottomSheet: AnimatedBottomSheet,
    handleOpenBottomSheet: handleOpenBottomSheet,
    handleCloseBottomSheet: handleCloseBottomSheet,
    handleAddHeightBottomSheet,
  };
};
