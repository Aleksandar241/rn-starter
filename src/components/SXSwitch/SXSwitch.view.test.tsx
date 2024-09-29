import React from 'react';

import { render } from '@testing-library/react-native';

import SXSwitch from './SXSwitch.view';

describe('SXSwitch', () => {
  const onSwitch = jest.fn();
  it('should render correctly if initial value is false', () => {
    const { getByTestId } = render(
      <SXSwitch initialValue={false} onSwitch={onSwitch} />,
    );
    const switchComponent = getByTestId('SX-SWITCH');

    expect(switchComponent).toBeDefined();
  });
});
