import React from 'react';

import { Text } from 'react-native';

import { render } from '@testing-library/react-native';

import SXButton from './SXAvoidKeyboard.view';

describe('SXButton', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <SXButton>
        <Text>Test Button</Text>
      </SXButton>,
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('applies style correctly', () => {
    const { getByTestId } = render(
      <SXButton style={{ backgroundColor: 'red' }} />,
    );

    const button = getByTestId('SX-AVOID-KEYBOARD');
    expect(button.props.style).toHaveProperty('backgroundColor', 'red');
  });
});
