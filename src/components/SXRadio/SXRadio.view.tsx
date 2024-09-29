import React, { memo } from 'react';

import Animated from 'react-native-reanimated';

import { SXTouchable } from '../SXTouchable';
import styles from './styles';
import { SXRadioProps } from './types';
import useViewModel from './useViewModel';

const SXRadio: SXRadioProps = ({ testID = 'SX-RADIO', ...rest }) => {
  const { borderColor, backgroundColor, circleStyles, onPressHandler } =
    useViewModel(rest);

  return (
    <SXTouchable
      onPress={onPressHandler}
      activeOpacity={1}
      style={[styles.radio, { borderColor }]}
      hasAnimation={false}>
      <Animated.View
        style={[styles.fill, circleStyles, { backgroundColor }]}
        testID={testID}
      />
    </SXTouchable>
  );
};

export default memo(SXRadio);
