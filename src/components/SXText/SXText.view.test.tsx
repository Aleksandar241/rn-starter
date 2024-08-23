import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import SXText from './SXText.view';

describe('SXText', () => {
  it('renders the TextContent component', () => {
    const {getByText} = render(<SXText>Hello World</SXText>);
    const textContent = getByText('Hello World');
    expect(textContent).toBeDefined();
  });

  it('renders the TextContent component', () => {
    const onPress = jest.fn();
    const {getByText} = render(<SXText onPress={onPress}>Hello World</SXText>);
    const textContent = getByText('Hello World');
    expect(textContent).toBeDefined();

    fireEvent.press(textContent);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
