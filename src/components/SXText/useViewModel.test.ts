import { renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    getColor: jest.fn().mockImplementation(color => color),
  }),
}));

const mockFont = {
  fontFamily: 'DEFAULT',
  fontSize: 20,
};

jest.mock('@theme', () => ({
  FONTS: {
    'DEFAULT-PETITE/REGULAR': {
      fontFamily: 'DEFAULT',
      fontSize: 20,
    },
  },
}));

describe('useViewModel', () => {
  it('should return the correct textColor and fontStyle', () => {
    const { result } = renderHook(() =>
      useViewModel({ color: 'primary', font: 'DEFAULT-PETITE/REGULAR' }),
    );

    expect(result.current.textColor).toBe('primary');
    expect(result.current.fontStyle).toEqual(mockFont);
  });

  it('should use default font when no font is provided', () => {
    const { result } = renderHook(() => useViewModel({ color: 'primary' }));

    expect(result.current.textColor).toBe('primary');
    expect(result.current.fontStyle).toEqual(mockFont);
  });
});
