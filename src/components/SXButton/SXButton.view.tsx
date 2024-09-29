import React from 'react';

import { SXText } from '../SXText';
import { SXTouchable } from '../SXTouchable';
import styles from './styles';
import type { SXButtonProps } from './types';
import useViewModel from './useViewModel';

const SXButton: SXButtonProps = ({
  testID = 'SX-BUTTON',
  disabled = false,
  title,
  style,
  type = 'primary',
  onPress,
}) => {
  const { buttonStyle } = useViewModel({ type, disabled });

  return (
    <SXTouchable
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={[styles.button, buttonStyle, style]}>
      <SXText text={title} style={styles.text} />
    </SXTouchable>
  );
};

export default SXButton;
