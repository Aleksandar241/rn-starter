import type { FC } from 'react';

import type { StyleProp, ViewStyle } from 'react-native';

type Props = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
};

export type SXLoadingProps = FC<Props>;
