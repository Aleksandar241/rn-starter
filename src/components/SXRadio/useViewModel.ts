import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {useTheme} from '@hooks';

import type {ViewModelProps} from './types';

const useViewModel = ({selected = false, onPress}: ViewModelProps) => {
  const scale = useSharedValue(selected ? 1 : 0);
  const {getColor} = useTheme();

  const onPressHandler = () => {
    scale.value = withSpring(selected ? 0 : 1, {duration: 200});
    onPress(!selected);
  };

  const circleStyles = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return {
    circleStyles,
    backgroundColor: getColor('primary'),
    borderColor: getColor('primary'),
    onPressHandler,
  };
};

export default useViewModel;
