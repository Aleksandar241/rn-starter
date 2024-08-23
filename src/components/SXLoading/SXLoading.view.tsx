import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from '@hooks';

import type {SXLoadingProps} from './types';

const SXLoading: SXLoadingProps = ({testID = 'SX-LOADING', style}) => {
  const {getColor} = useTheme();
  return (
    <ActivityIndicator
      testID={testID}
      size="large"
      color={getColor('primary')}
      style={style}
    />
  );
};

export default SXLoading;
