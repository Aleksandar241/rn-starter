import type {FC, PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';

export type ButtonType = 'primary' | 'secondary';

export type ViewModelProps = {
  offset?: number;
};

type Props = ViewModelProps & {
  testID?: string;
  style?: ViewStyle;
};

export type SXAvoidKeyboardProps = FC<PropsWithChildren<Props>>;
