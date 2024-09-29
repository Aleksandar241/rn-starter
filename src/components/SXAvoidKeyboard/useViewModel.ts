import { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';

import { ViewModelProps } from './types';

const useViewModel = ({ offset = 0 }: ViewModelProps) => {
  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => {
    const isVisible = keyboard.height.value > 0;
    const visibleOffset = isVisible ? offset : 0;
    return {
      transform: [{ translateY: -keyboard.height.value - visibleOffset }],
    };
  }, [keyboard.height.value, offset]);

  return {
    animatedStyles,
  };
};

export default useViewModel;
