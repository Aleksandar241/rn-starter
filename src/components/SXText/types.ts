import type { FC } from 'react';

import type { StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';

import type { Color, Fonts } from '@theme';

import { TranslatedTextProps } from '../../translations/types';

export type ViewModelProps = {
  font?: Fonts;
  color?: Color;
  text?: TranslatedTextProps;
  children?: TextProps['children'];
};

type Props = Omit<TextProps, 'children'> &
  ViewModelProps & {
    textWrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<Omit<TextStyle, 'fontFamily' | 'fontWeight'>>;
    onPress?: () => void;
  };

export type SXTextProps = FC<Props>;
