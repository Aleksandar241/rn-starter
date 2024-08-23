import type {FC} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

import type {IconName} from '@icons';
import type {Color} from '@theme';

export type ViewModelProps = {
  icon: IconName;
  color?: Color;
};

export type Props = ViewModelProps & {
  testID?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export type SXIconProps = FC<Props>;
