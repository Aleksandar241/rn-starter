import {
  ReactNode,
  createElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {Device} from '@constants';
import {Logger} from '@utils';

import {SXLinearGradient} from '../SXLinearGradient';
import styles from './styles';
import {ViewModelProps} from './types';

const useViewModel = ({
  testID = 'SX-SKELETON',
  width,
  height = '100%',
  speed = 100,
  borderRadius = styles.skeleton.borderRadius,
}: ViewModelProps) => {
  const skeletonWidth = useRef(0);
  const skeleton = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.5 + 0.05 * skeleton.value,
      transform: [{translateX: skeleton.value}],
    };
  });

  const generateElement = useCallback(
    (element: ReactNode) => {
      const isValid = isValidElement(element);
      const style = isValid ? element.props?.style : {};
      const elementWidth = !width && isValid ? style?.width : width;

      const isElementWidthValid = typeof elementWidth === 'number';
      if (!isElementWidthValid) {
        Logger.error('Element width must be a number', {
          location: 'SXSkeleton',
        });
      }

      skeletonWidth.current = isElementWidthValid ? elementWidth : Device.WIDTH;
      const AnimatedElement = Animated.View;

      return createElement(AnimatedElement, {
        testID,
        style: [style, styles.skeleton, {width: elementWidth, borderRadius}],
        children: createElement(AnimatedElement, {
          style: [animatedStyle, {height, width: elementWidth}],
          children: createElement(SXLinearGradient, {
            style: {
              width: elementWidth,
              height,
            },
            colors: [
              {color: 'white', opacity: '_80'},
              {color: 'white', opacity: '_50'},
              {color: 'white', opacity: '_100'},
            ],
            start: {x: 0, y: 0},
            end: {x: 1, y: 0},
          }),
        }),
      });
    },
    [animatedStyle, borderRadius, height, testID, width],
  );

  useEffect(() => {
    skeleton.value = withRepeat(
      withTiming(skeletonWidth.current, {
        duration: speed * 10,
        easing: Easing.bezier(0.7, 0.4, 0.6, 1),
      }),
      -1,
      false,
    );

    return () => cancelAnimation(skeleton);
  }, [skeleton, speed, width]);

  return {
    generateElement,
  };
};

export default useViewModel;
