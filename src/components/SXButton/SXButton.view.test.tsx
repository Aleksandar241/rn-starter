import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import SXButton from './SXButton.view';

describe('SXButton', () => {
  it('renders button with correct title', () => {
    const onPress = jest.fn();

    const title = 'Click me';
    const {getByText} = render(<SXButton title={title} onPress={onPress} />);
    const buttonElement = getByText(title);
    expect(buttonElement).toBeDefined();
  });

  it('calls onPress function when button is pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(<SXButton title="Click me" onPress={onPress} />);
    const buttonElement = getByText('Click me');
    fireEvent.press(buttonElement);
    expect(onPress).toHaveBeenCalled();
  });
});
