import { renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    getColor: jest.fn().mockImplementation(color => color),
  }),
}));

describe('useViewModel', () => {
  it('should return the correct button style when type is primary and not disabled', () => {
    const { result } = renderHook(() =>
      useViewModel({ type: 'primary', disabled: false }),
    );

    expect(result.current.buttonStyle).toEqual({
      backgroundColor: 'secondary',
    });
  });

  it('should return the correct button style when type is secondary and not disabled', () => {
    const { result } = renderHook(() =>
      useViewModel({ type: 'secondary', disabled: false }),
    );

    expect(result.current.buttonStyle).toEqual({
      backgroundColor: 'secondary',
    });
  });

  it('should return the correct button style when disabled is true', () => {
    const { result } = renderHook(() =>
      useViewModel({ type: 'primary', disabled: true }),
    );

    expect(result.current.buttonStyle).toEqual({
      backgroundColor: 'disabledPrimary',
    });
  });
});
