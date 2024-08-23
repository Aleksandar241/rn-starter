import {Icons} from '@icons';
import {renderHook} from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    getColor: jest.fn().mockImplementation(color => color),
  }),
}));

jest.mock('@icons', () => ({
  Icons: {
    rocket: 'RocketIcon',
  },
}));

describe('useViewModel', () => {
  it('should return the correct Icon and fill value', () => {
    const {result} = renderHook(() =>
      useViewModel({icon: 'rocket', color: 'primary'}),
    );

    expect(result.current.Icon).toBe(Icons.rocket);
    expect(result.current.fill).toBe('primary');
  });

  it('should use default color when no color is provided', () => {
    const {result} = renderHook(() => useViewModel({icon: 'rocket'}));

    expect(result.current.Icon).toBe(Icons.rocket);
    expect(result.current.fill).toBe('text');
  });

  it('should handle an invalid icon gracefully', () => {
    const {result} = renderHook(() =>
      // @ts-ignore
      useViewModel({icon: 'InvalidIcon', color: 'primary'}),
    );

    expect(result.current.Icon).toBeUndefined();
    expect(result.current.fill).toBe('primary');
  });
});
