import {Text} from 'react-native';

import {render} from '@testing-library/react-native';

import SXSkeleton from './SXSkeleton.view';

describe('SXSkeleton', () => {
  it('renders children when loading is false', () => {
    const {getByText, queryByTestId} = render(
      <SXSkeleton loading={false}>
        <Text>Child Component</Text>
      </SXSkeleton>,
    );

    expect(getByText('Child Component')).toBeDefined();
    expect(queryByTestId('SX-SKELETON')).toBeNull();
  });

  it('renders skeleton when loading is true', () => {
    const {queryByText, queryByTestId} = render(
      <SXSkeleton loading={true}>
        <Text>Child Component</Text>
      </SXSkeleton>,
    );
    expect(queryByText('Child Component')).toBeNull();
    expect(queryByTestId('SX-SKELETON')).toBeDefined();
  });
});
