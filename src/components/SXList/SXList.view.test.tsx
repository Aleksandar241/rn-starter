import React from 'react';

import { render } from '@testing-library/react-native';

import { Logger } from '@utils';

import SXList from './SXList.view';

describe('SXList', () => {
  jest.spyOn(Logger, 'error').mockImplementation(() => {});
  it('renders loading state correctly', () => {
    const { getByTestId } = render(
      <SXList loading={true} renderItem={() => <></>} data={[]} />,
    );
    const loadingElement = getByTestId('SX-LOADING');
    expect(loadingElement).toBeTruthy();
  });

  it('renders error state correctly', () => {
    const { getByText } = render(
      <SXList
        loading={false}
        error={true}
        renderItem={() => <></>}
        data={[]}
      />,
    );

    const errorElement = getByText('Something went wrong');
    expect(errorElement).toBeTruthy();
    expect(Logger.error).toHaveBeenCalled();
  });

  it('renders data correctly', () => {
    const { queryByText, queryByTestId } = render(
      <SXList renderItem={() => <></>} data={[{ id: '1', name: 'Test' }]} />,
    );

    const errorElement = queryByText('Something went wrong');
    const loadingElement = queryByTestId('SX-LOADING');
    const listElement = queryByTestId('SX-LIST');

    expect(errorElement).toBeNull();
    expect(loadingElement).toBeNull();
    expect(listElement).toBeTruthy();
  });
});
