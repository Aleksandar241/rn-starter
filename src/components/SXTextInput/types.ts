import type { FC, LegacyRef } from 'react';

import type {
  StyleProp,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import type { Maybe } from '@types';

import { TranslatedTextProps } from '../../translations/types';
import { SXIconProps } from '../SXIcon';

export type ViewModelProps = {
  isPassword?: boolean;
  useDebounce?: boolean;
  rightIcon?: SXIconProps;
  error?: TranslatedTextProps;
  placeholder?: TranslatedTextProps;
  onFocus?: TextInputProps['onFocus'];
  onBlur?: TextInputProps['onBlur'];
  onChange: (text: Maybe<string>) => void;
  ref?: LegacyRef<TextInput>;
};

export type Props = Omit<TextInputProps, 'onChangeText' | 'onChange'> &
  ViewModelProps & {
    leftIcon?: SXIconProps;
    label?: TranslatedTextProps;
    containerStyle?: StyleProp<ViewStyle>;
  };

export type SXTextInputProps = FC<Props>;
