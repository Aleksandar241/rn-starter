import type {FC} from 'react';
import type {ViewStyle} from 'react-native';

export type ButtonType = 'primary' | 'secondary';

export type ViewModelProps = {
  type?: ButtonType;
  disabled?: boolean;
};

type Props = ViewModelProps & {
  testID?: string;
  style?: ViewStyle;
  title: string;
  onPress: () => void;
};

export type SXButtonProps = FC<Props>;
