import type {FC} from 'react';
import type {ViewStyle} from 'react-native';

import {TranslatedTextProps} from '../../translations/types';

export type ButtonType = 'primary' | 'secondary';

export type ViewModelProps = {
  type?: ButtonType;
  disabled?: boolean;
};

type Props = ViewModelProps & {
  testID?: string;
  style?: ViewStyle;
  title: TranslatedTextProps;
  onPress: () => void;
};

export type SXButtonProps = FC<Props>;
