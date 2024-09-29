import React from 'react';

import { render } from '@testing-library/react-native';

import SXLoading from './SXLoading.view';

describe('SXLoading', () => {
  it('renders the activity indicator', () => {
    const { getByTestId } = render(<SXLoading />);
    const activityIndicator = getByTestId('SX-LOADING');
    expect(activityIndicator).toBeTruthy();
  });

  it('applies the provided style', () => {
    const style = { backgroundColor: 'red' };
    const { getByTestId } = render(<SXLoading style={style} />);
    const activityIndicator = getByTestId('SX-LOADING');
    expect(activityIndicator.props.style).toEqual(style);
  });
});
