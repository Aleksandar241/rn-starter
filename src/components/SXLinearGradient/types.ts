import type {FC} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

import {Color} from '@theme';
import {LinearGradientProps} from 'expo-linear-gradient';

export type ViewModelProps = {
  colors: Color[];
};

type Props = Omit<LinearGradientProps, 'colors'> &
  ViewModelProps & {
    testID?: string;
    style?: StyleProp<ViewStyle>;
  };

export type SXLinearGradientProps = FC<Props>;
