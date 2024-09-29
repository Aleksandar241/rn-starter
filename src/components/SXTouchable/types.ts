import type { FC, PropsWithChildren } from 'react';

import type { StyleProp, ViewStyle } from 'react-native';

export type ViewModelProps = {
  activeOpacity?: number;
  hasAnimation?: boolean;
  hasThrottle?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

type Props = PropsWithChildren<
  ViewModelProps & {
    testID?: string;
    style?: StyleProp<ViewStyle>;
  }
>;

export type SXTouchableProps = FC<Props>;
