import type { FC, PropsWithChildren } from 'react';

import type { StyleProp, ViewStyle } from 'react-native';

import type { Edge } from 'react-native-safe-area-context';

type Props = PropsWithChildren<{
  edges?: readonly Edge[];
  style?: StyleProp<ViewStyle>;
}>;

export type SXScreenProps = FC<Props>;
