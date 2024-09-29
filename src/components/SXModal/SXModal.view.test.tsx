import React from 'react';

import { View } from 'react-native';

import { render } from '@testing-library/react-native';

import SXModal from './SXModal.view';

describe('SXModal', () => {
  it('should render the modal with children', () => {
    const onHide = jest.fn();
    const { getByTestId } = render(
      <SXModal isVisible={true} onHide={onHide}>
        <View testID="child-view" />
      </SXModal>,
    );

    const modal = getByTestId('SX-MODAL');
    const childView = getByTestId('child-view');

    expect(modal).toBeDefined();
    expect(childView).toBeDefined();
  });

  it('should not render modal', () => {
    const onHide = jest.fn();
    const { queryByTestId } = render(
      <SXModal isVisible={false} onHide={onHide} hasCloseIcon>
        <View testID="child-view" />
      </SXModal>,
    );

    const modal = queryByTestId('SX-MODAL');
    const childView = queryByTestId('child-view');

    expect(modal).toBeNull();
    expect(childView).toBeNull();
  });
});
