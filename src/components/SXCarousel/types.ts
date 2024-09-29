import type { FC, PropsWithChildren } from 'react';

import type { ViewStyle } from 'react-native';

import type { ScrollHandlerProcessed } from 'react-native-reanimated';

export type ViewModelIndicatorProps = {
  scrollOffset: {
    value: number;
  };
  index: number;
};

export type ViewModelIndicatorReturn = {
  animatedStyle: ViewStyle;
};

export type Model = 'indicator' | 'carousel';
export type IndicatorProps = FC<ViewModelIndicatorProps>;

export type ViewSXCarouselReturn = {
  scrollOffset: {
    value: number;
  };
  scrollHandler: ScrollHandlerProcessed<Record<string, unknown>>;
};

type Props = {
  testID?: string;
};

export type SXCarouselProps = FC<PropsWithChildren<Props>>;
