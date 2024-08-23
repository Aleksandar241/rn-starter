import type {FC, ForwardedRef} from 'react';
import type {
  StyleProp,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import type {Maybe} from '@types';

import {SXIconProps} from '../SXIcon';

export type ViewModelProps = {
  isPassword?: boolean;
  useDebounce?: boolean;
  rightIcon?: SXIconProps;
  error?: Maybe<string>;
  onFocus?: TextInputProps['onFocus'];
  onBlur?: TextInputProps['onBlur'];
  onChange: (text: Maybe<string>) => void;
};

export type Props = Omit<TextInputProps, 'onChangeText' | 'onChange'> &
  ViewModelProps & {
    leftIcon?: SXIconProps;
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
  };

export type SXTextInputRef = ForwardedRef<TextInput>;

export type SXTextInputProps = FC<Props>;
