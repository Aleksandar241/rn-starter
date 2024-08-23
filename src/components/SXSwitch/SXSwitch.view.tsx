import React, {memo} from 'react';
import {View} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import styles from './styles';
import {SXSwitchProps} from './types';
import useViewModel from './useViewModel';

const SXSwitch: SXSwitchProps = ({testID = 'SX-SWITCH', ...rest}) => {
  const {
    animatedThumbStyle,
    rippleStyle,
    rippleAnimatedStyle,
    trackStyle,
    thumbStyle,
    tap,
  } = useViewModel(rest);

  return (
    <View style={[styles.track, trackStyle]}>
      <Animated.View style={[animatedThumbStyle, styles.animationWrapper]}>
        <Animated.View
          style={[styles.ripple, rippleStyle, rippleAnimatedStyle]}
        />
        <GestureDetector gesture={tap}>
          <Animated.View
            hitSlop={30}
            style={[styles.thumb, thumbStyle]}
            testID={testID}
          />
        </GestureDetector>
      </Animated.View>
    </View>
  );
};

export default memo(SXSwitch);
