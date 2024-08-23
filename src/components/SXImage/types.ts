import type {FC} from 'react';
import {StyleProp} from 'react-native';

import {Maybe} from '@types';
import {ImageContentFit, ImageStyle} from 'expo-image';

type Props = {
  testID?: string;
  source: Maybe<string>;
  recyclingKey?: Maybe<string>;
  contentFit?: ImageContentFit;
  style?: StyleProp<ImageStyle>;
};

export type SXImageProps = FC<Props>;
