import {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {Device} from '@constants';
import {useTheme} from '@hooks';

import type {
  ViewModelIndicatorProps,
  ViewModelIndicatorReturn,
  ViewSXCarouselReturn,
} from './types';

export const useSXCarouselViewModel = (): ViewSXCarouselReturn => {
  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollOffset.value = event.contentOffset.x;
  });

  return {
    scrollOffset,
    scrollHandler,
  };
};

export const useIndicatorViewModel = ({
  scrollOffset,
  index,
}: ViewModelIndicatorProps): ViewModelIndicatorReturn => {
  const {getColor} = useTheme();

  const COLOR_OFF = getColor('primary');
  const COLOR_ON = getColor('secondary');

  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / Device.WIDTH;
    const inputRange = [index - 1, index, index + 1];
    const animatedColor = interpolateColor(input, inputRange, [
      COLOR_OFF,
      COLOR_ON,
      COLOR_OFF,
    ]);

    return {
      width: interpolate(input, inputRange, [10, 28, 10], 'clamp'),
      backgroundColor: animatedColor,
    };
  });

  return {
    animatedStyle,
  };
};

const useViewModelFactory = <T extends 'carousel' | 'indicator'>(
  type: T,
): T extends 'carousel'
  ? () => ViewSXCarouselReturn
  : (props: ViewModelIndicatorProps) => ViewModelIndicatorReturn =>
  type === 'carousel' ? useSXCarouselViewModel : (useIndicatorViewModel as any);

export default useViewModelFactory;
