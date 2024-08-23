import React from 'react';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import type {SXTouchableProps} from './types';
import useViewModel from './useViewModel';

const SXTouchable: SXTouchableProps = ({
  testID = 'SX-TOUCHABLE',
  children,
  style,
  ...rest
}) => {
  const {gesture, animatedStyle} = useViewModel(rest);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View testID={testID} style={[animatedStyle, style]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default SXTouchable;
