import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import {Logger} from '@utils';

import SXIcon from './SXIcon.view';

jest.mock('@icons', () => ({
  Icons: {
    rocket: () => <></>,
  },
}));

describe('SXIcon', () => {
  it('renders without crashing', () => {
    render(<SXIcon icon="rocket" />);
  });

  it('renders the icon when provided', () => {
    const {getByTestId} = render(<SXIcon icon="rocket" />);
    const icon = getByTestId('SX-ICON');
    expect(icon).toBeTruthy();
  });

  it('logs an error when the icon cannot be loaded', () => {
    const mockLogger = jest.spyOn(Logger, 'log');
    // @ts-ignore
    render(<SXIcon />);
    expect(mockLogger).toHaveBeenCalledWith('This icon cannot be loaded', {
      location: 'SXIcon',
    });
  });

  it('calls the onPress function when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(<SXIcon icon="rocket" onPress={onPress} />);
    const icon = getByTestId('SX-ICON');
    fireEvent.press(icon);
    expect(onPress).toHaveBeenCalled();
  });
});
