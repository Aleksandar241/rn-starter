import React from 'react';
import {View} from 'react-native';

import {Spacings} from '@theme';
import {Logger} from '@utils';

import {SXTouchable} from '../SXTouchable';
import type {SXIconProps} from './types';
import useViewModel from './useViewModel';

const SXIcon: SXIconProps = ({
  testID = 'SX-ICON',
  width = Spacings.Cozy,
  height = Spacings.Cozy,
  style,
  onPress,
  ...rest
}) => {
  const {Icon, fill} = useViewModel(rest);

  if (!Icon) {
    Logger.log('This icon cannot be loaded', {location: 'SXIcon'});
    return null;
  }

  const IconContent = <Icon fill={fill} width={width} height={height} />;

  if (onPress) {
    return (
      <SXTouchable onPress={onPress} style={style} testID={testID}>
        {IconContent}
      </SXTouchable>
    );
  }

  return (
    <View style={style} testID={testID}>
      {IconContent}
    </View>
  );
};

export default SXIcon;
