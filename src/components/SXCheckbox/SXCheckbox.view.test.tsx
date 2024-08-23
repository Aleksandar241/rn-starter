import React from 'react';

import {render} from '@testing-library/react-native';

import SXCheckbox from '../SXCheckbox/SXCheckbox.view';

describe('SXCheckbox', () => {
  const onPress = jest.fn();

  it('should render unchecked checkbox', () => {
    const {queryByTestId} = render(<SXCheckbox onPress={onPress} />);
    const checkbox = queryByTestId('SX-CHECKBOX');
    expect(checkbox).toBeNull();
  });

  it('should render checked checkbox when clicked', () => {
    const {queryByTestId} = render(
      <SXCheckbox onPress={onPress} initialValue={true} />,
    );
    const checkbox = queryByTestId('SX-CHECKBOX');
    expect(checkbox).toBeDefined();
  });
});
