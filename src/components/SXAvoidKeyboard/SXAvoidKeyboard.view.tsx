import React from 'react';
import Animated from 'react-native-reanimated';

import type {SXAvoidKeyboardProps} from './types';
import useViewModel from './useViewModel';

const SXAvoidKeyboard: SXAvoidKeyboardProps = ({
  testID = 'SX-AVOID-KEYBOARD',
  children,
  style,
  ...rest
}) => {
  const {animatedStyles} = useViewModel(rest);

  return (
    <Animated.View testID={testID} style={[animatedStyles, style]}>
      {children}
    </Animated.View>
  );
};

export default SXAvoidKeyboard;
