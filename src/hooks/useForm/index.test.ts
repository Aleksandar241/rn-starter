import {renderHook} from '@testing-library/react-hooks';

import {useForm} from './index';

jest.mock('@utils', () => ({
  Scheme: {
    resolve: jest.fn(),
  },
}));
describe('useForm', () => {
  it('should return a form object', () => {
    const {result} = renderHook(() =>
      useForm({
        defaultValues: {
          name: 'John Doe',
        },
      }),
    );

    expect(result.current.control).toBeDefined();
  });
});
