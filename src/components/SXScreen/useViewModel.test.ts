import {renderHook} from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    getColor: jest.fn().mockImplementation(color => color),
  }),
}));

describe('useViewModel', () => {
  it('should return the correct background color', () => {
    const {result} = renderHook(() => useViewModel());

    expect(result.current.backgroundColor).toBe('background');
  });
});
