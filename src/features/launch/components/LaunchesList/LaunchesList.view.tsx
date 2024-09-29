import React, { FC, memo } from 'react';

import type { Launch } from '@graphql';

import { SXList } from '@components';

import styles from './styles';
import useViewModel from './useViewModel';

const LaunchesList: FC = () => {
  const { launches, loading, error, refetch, renderItem } = useViewModel();

  return (
    <SXList<Launch>
      data={launches as readonly Launch[]}
      keyExtractor={item => item?.id!}
      loading={loading}
      error={error}
      contentContainerStyle={styles.contentContainer}
      refreshing={loading}
      onRefresh={refetch}
      removeClippedSubviews
      renderItem={renderItem}
      estimatedItemSize={200}
    />
  );
};

export default memo(LaunchesList);
