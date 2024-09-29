import React from 'react';

import { render } from '@testing-library/react-native';

import SXRootModal from './SXRootModal.view';

jest.mock('@stores', () => ({
  ...jest.requireActual('@stores'),
  useRootModalStore: jest.fn(() => ({
    content: [<></>],
    pop: jest.fn(),
  })),
}));
describe('SXRootModal', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<SXRootModal testID={'SX-ROOT_MODAL'} />);
    expect(getByTestId('SX-ROOT_MODAL')).toBeDefined();
  });
});
