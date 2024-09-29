import type { FC } from 'react';

import { StyleProp } from 'react-native';

import { ImageContentFit, ImageStyle } from 'expo-image';

import { Maybe } from '@types';

type Props = {
  testID?: string;
  source: Maybe<string>;
  recyclingKey?: Maybe<string>;
  contentFit?: ImageContentFit;
  style?: StyleProp<ImageStyle>;
};

export type SXImageProps = FC<Props>;
