import {useCallback} from 'react';
import {Gesture} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {useTheme} from '@hooks';

import styles from './styles';
import {ViewModelProps} from './types';

const HIDE_MODAL_POSITION = styles.modal.height;

const useViewModel = ({onHide}: ViewModelProps) => {
  const {getColor} = useTheme();
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});

  const resetAnimation = useCallback(() => {
    setTimeout(() => {
      translateY.value = 0;
    }, 200);
  }, [translateY]);

  const scrollTo = useCallback(
    (destination: number) => {
      'worklet';
      const isCompleted = destination !== 0;

      if (isCompleted) {
        translateY.value = withTiming(
          destination,
          {duration: 100},
          isFinished => {
            if (isFinished) {
              runOnJS(onHide)();
              runOnJS(resetAnimation)();
            }
          },
        );
        return;
      }
      translateY.value = withSpring(destination, {damping: 50});
    },
    [translateY, onHide, resetAnimation],
  );

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      const curr = event.translationY + context.value.y;

      if (curr >= 0) {
        translateY.value = curr;
        return;
      }
    })
    .onEnd(() => {
      if (translateY.value > HIDE_MODAL_POSITION / 3) {
        scrollTo(HIDE_MODAL_POSITION);
        return;
      }

      if (translateY.value >= 0) {
        scrollTo(0);
      }
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const onClose = useCallback(() => {
    scrollTo(HIDE_MODAL_POSITION);
  }, [scrollTo]);

  return {
    gesture,
    animatedStyles,
    onClose,
    backgroundColor: getColor('background'),
  };
};

export default useViewModel;
