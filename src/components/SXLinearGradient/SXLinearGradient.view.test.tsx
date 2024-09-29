import React from 'react';

import { render } from '@testing-library/react-native';
import { Color } from '@theme';

import SXLinearGradient from './SXLinearGradient.view';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    getColor: jest.fn().mockImplementation(color => color),
  }),
}));

describe('SXLinearGradient', () => {
  it('renders correctly with provided colors', () => {
    const colors: Color[] = ['primary', 'secondary'];
    const { getByTestId } = render(<SXLinearGradient colors={colors} />);
    const gradient = getByTestId('SX-LINEAR-GRADIENT');

    expect(gradient).toBeDefined();
  });
});
