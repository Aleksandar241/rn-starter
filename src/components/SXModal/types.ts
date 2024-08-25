import type {FC, PropsWithChildren} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

export type ViewModelProps = {
  onHide: () => void;
};

type Props = ViewModelProps &
  PropsWithChildren<{
    testID?: string;
    isVisible: boolean;
    hasCloseIcon?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
  }>;

export type SXModalProps = FC<Props>;
