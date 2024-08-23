import type {FC} from 'react';
import type {DimensionValue} from 'react-native';

export type ViewModelProps = {
  width?: number;
  height?: DimensionValue;
  speed?: number;
  borderRadius?: number;
  testID?: string;
};

type Props = ViewModelProps & {
  children: React.ReactNode;
  loading: boolean;
};

export type SXSkeletonProps = FC<Props>;
