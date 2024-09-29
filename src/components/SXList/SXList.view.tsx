import React from 'react';

import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { Logger } from '@utils';

import { SXLoading } from '../SXLoading';
import { SXText } from '../SXText';
import styles from './styles';
import { SXListProps } from './types';

const SXList = <T,>({
  testID = 'SX-LIST',
  loading = false,
  error,
  ...rest
}: SXListProps<T>) => {
  if (loading) {
    return <SXLoading />;
  }

  if (error) {
    Logger.error('Theres error with list data', { location: 'SXList' });
    return <SXText children="Something went wrong" color="error" />;
  }

  return (
    <View style={styles.container}>
      <FlashList {...rest} testID={testID} />
    </View>
  );
};

export default SXList;
