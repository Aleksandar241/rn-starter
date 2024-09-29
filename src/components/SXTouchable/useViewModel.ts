import throttle from 'lodash/throttle';
import { Gesture } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import type { ViewModelProps } from './types';

const useViewModel = ({
  activeOpacity = 0.5,
  hasAnimation = true,
  hasThrottle = true,
  disabled = false,
  onPress,
}: ViewModelProps) => {
  const isActive = useSharedValue(false);

  const onPressHandler = () => {
    if (onPress && !disabled) {
      onPress();
    }
  };
  const throttledPress = hasThrottle
    ? throttle(onPressHandler, 500, {
        leading: true,
        trailing: false,
      })
    : onPressHandler;

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      if (disabled) return;
      isActive.value = true;
    })
    .onTouchesUp(() => {
      runOnJS(throttledPress)();
    })
    .onFinalize(() => {
      if (disabled) return;
      isActive.value = false;
    })
    .withTestId('SX-TOUCHABLE-GESTURE');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive.value ? activeOpacity : 1, {
        duration: 100,
      }),
      transform: [
        {
          scale: hasAnimation ? withSpring(isActive.value ? 0.94 : 1) : 1,
        },
      ],
    };
  }, [isActive, hasAnimation, activeOpacity]);

  return {
    gesture,
    animatedStyle,
  };
};

export default useViewModel;
