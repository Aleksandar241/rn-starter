import { Gesture } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@hooks';

import { Spacings } from '../../theme/spacings';
import type { ViewModelProps } from './types';

const useViewModel = ({ initialValue = false, onSwitch }: ViewModelProps) => {
  const isActive = useSharedValue(false);
  const transformX = useSharedValue(
    initialValue ? Spacings.Compact : -Spacings.Compact,
  );
  const rippleScale = useSharedValue(0);

  const { getColor } = useTheme();

  const onSwitchHandler = (value: boolean) => {
    onSwitch(value);
    isActive.value = false;
  };

  const Switch = (value: boolean) => {
    'worklet';
    isActive.value = true;

    transformX.value = withTiming(
      value ? Spacings.Compact : -Spacings.Compact,
      {
        duration: 200,
      },
      isFinished => {
        if (isFinished) {
          runOnJS(onSwitchHandler)(value);
        }
      },
    );

    rippleScale.value = withTiming(1, { duration: 400 }, isFinished => {
      if (isFinished) {
        rippleScale.value = 0;
      }
    });
  };

  const tap = Gesture.Pan().onChange(event => {
    const isOff = transformX.value === -Spacings.Compact;
    if (event.changeX > 0 && !isActive.value && isOff) {
      Switch(true);
      return;
    }
    if (event.changeX < 0 && !isActive.value && !isOff) {
      Switch(false);
    }
  });

  const trackStyle = {
    backgroundColor: getColor('primary'),
  };

  const thumbStyle = {
    backgroundColor: getColor('secondary'),
  };

  const rippleStyle = {
    backgroundColor: getColor({ color: 'secondary', opacity: '_20' }),
  };

  const animatedThumbStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: transformX.value }],
    }),
    [transformX],
  );

  const rippleAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: rippleScale.value }],
    }),
    [rippleScale],
  );

  return {
    animatedThumbStyle,
    rippleAnimatedStyle,
    tap,
    thumbStyle,
    trackStyle,
    rippleStyle,
  };
};

export default useViewModel;
