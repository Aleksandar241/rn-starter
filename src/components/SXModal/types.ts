import type {FC, PropsWithChildren} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

type Props = PropsWithChildren<{
  testID?: string;
  isVisible: boolean;
  hasCloseIcon?: boolean;
  onHide: () => void;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}>;

export type SXModalProps = FC<Props>;
