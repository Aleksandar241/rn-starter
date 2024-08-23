import React from 'react';
import {View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import {render, renderHook} from '@testing-library/react-native';

import SXCarousel from './SXCarousel.view';
import useViewModelFactory from './useViewModel';

jest.mock('./useViewModel', () => jest.fn());

const mockUseViewModelFactory = useViewModelFactory as jest.Mocked<
  typeof useViewModelFactory
>;

describe('SXCarousel', () => {
  const scrollHandler = jest.fn();
  const {result} = renderHook(() => useSharedValue(0));
  const scrollOffset = result.current;

  it('renders correctly with children', () => {
    // @ts-ignore
    mockUseViewModelFactory.mockReturnValue(() => ({
      scrollHandler,
      scrollOffset,
    }));
    const children = [
      <View key="1" testID="child-1" />,
      <View key="2" testID="child-2" />,
      <View key="3" testID="child-3" />,
    ];

    const {getByTestId, queryByTestId} = render(
      <SXCarousel>{children}</SXCarousel>,
    );

    expect(getByTestId('child-1')).toBeTruthy();
    expect(getByTestId('child-2')).toBeTruthy();
    expect(getByTestId('child-3')).toBeTruthy();

    children.forEach((_, index) => {
      expect(queryByTestId(`child-${index + 1}`)).toBeTruthy();
    });
  });

  it('calls scrollHandler on scroll', () => {
    const children = [<View key="1" testID="child-1" />];
    const {getByTestId} = render(<SXCarousel>{children}</SXCarousel>);

    const scrollView = getByTestId('SX-CAROUSEL');
    scrollView.props.onScroll({nativeEvent: {contentOffset: {x: 100}}});

    expect(scrollHandler).toHaveBeenCalled();
  });
});
