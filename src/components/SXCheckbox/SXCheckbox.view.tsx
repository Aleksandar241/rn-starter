import React, {memo} from 'react';

import {SXIcon} from '../SXIcon';
import {SXTouchable} from '../SXTouchable';
import styles from './styles';
import {SXCheckboxProps} from './types';
import useViewModel from './useViewModel';

const SXCheckbox: SXCheckboxProps = ({testID = 'SX-CHECKBOX', ...rest}) => {
  const {isChecked, borderColor, onPressHandler} = useViewModel(rest);

  return (
    <SXTouchable
      onPress={onPressHandler}
      activeOpacity={1}
      style={[styles.checkbox, {borderColor}]}>
      {isChecked && (
        <SXIcon
          icon="rocket"
          testID={testID}
          width={styles.icon.width}
          height={styles.icon.height}
        />
      )}
    </SXTouchable>
  );
};

export default memo(SXCheckbox);
