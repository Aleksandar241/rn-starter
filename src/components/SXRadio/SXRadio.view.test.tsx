import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import SXRadio from '../SXRadio/SXRadio.view';

describe('SXRadio', () => {
  it('should call onPressHandler when pressed', () => {
    const onPressHandler = jest.fn();
    const {getByTestId} = render(<SXRadio selected onPress={onPressHandler} />);

    fireEvent.press(getByTestId('SX-TOUCHABLE'));

    expect(onPressHandler).toHaveBeenCalled();
    expect(getByTestId('SX-RADIO')).toHaveAnimatedStyle({
      transform: [{scale: 1}],
    });
  });
});
