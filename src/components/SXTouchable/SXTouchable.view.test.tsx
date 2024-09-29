import React from 'react';

import { Text } from 'react-native';

import { act } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import { getByGestureTestId } from 'react-native-gesture-handler/jest-utils';

import SXTouchable from './SXTouchable.view';

describe('SXTouchable', () => {
  const onPress = jest.fn();
  it('should render children', () => {
    const { getByText } = render(
      <SXTouchable onPress={onPress}>
        <Text>Test Child</Text>
      </SXTouchable>,
    );

    expect(getByText('Test Child')).toBeDefined();
  });

  it('should apply custom style', () => {
    const { getByTestId } = render(
      <SXTouchable
        onPress={onPress}
        style={{ backgroundColor: 'red' }}
        testID="custom-style"
      />,
    );

    expect(getByTestId('custom-style')).toHaveAnimatedStyle({
      backgroundColor: 'red',
    });
  });

  it('should call onPress handler when pressed', () => {
    const onPress = jest.fn();
    render(<SXTouchable onPress={onPress} />);

    act(() => {
      // @ts-ignore
      getByGestureTestId(
        'SX-TOUCHABLE-GESTURE', // @ts-ignore
      ).handlers.onTouchesUp.__closure.throttledPress();
    });

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
