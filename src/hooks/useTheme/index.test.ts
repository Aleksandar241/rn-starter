import { renderHook } from '@testing-library/react-hooks';
import { Colors } from '@theme';

import { Logger } from '@utils';

import { useThemeStore } from '@stores';

import { useTheme } from '.';

jest.mock('@stores', () => ({
  useThemeStore: jest.fn(),
}));

const mockUseTheme = useThemeStore as jest.MockedFunction<typeof useThemeStore>;

describe('useTheme', () => {
  beforeEach(() => {
    jest.spyOn(Logger, 'warn');
    jest.clearAllMocks();
  });

  it('should return default theme when no color scheme is provided', () => {
    mockUseTheme.mockReturnValue({ theme: 'light' });
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe(Colors.light);
  });

  it('should return the correct theme based on the color scheme', () => {
    mockUseTheme.mockReturnValue({ theme: 'dark' });
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe(Colors.dark);
  });

  describe('getColor', () => {
    it('should return the primary color when no color is provided', () => {
      mockUseTheme.mockReturnValue({ theme: 'dark' });
      const { result } = renderHook(() => useTheme());
      const primaryColor = result.current.theme.primary;

      expect(result.current.getColor()).toBe(primaryColor);
    });

    it('should return the specified color from the theme when it exists', () => {
      mockUseTheme.mockReturnValue({ theme: 'dark' });
      const { result } = renderHook(() => useTheme());
      const testColor = 'primary';
      const colorValue = result.current.theme[testColor];

      expect(result.current.getColor(testColor)).toBe(colorValue);
    });

    it('should return the primary color and log a warning when the color does not exist in the theme', () => {
      mockUseTheme.mockReturnValue({ theme: 'dark' });

      const { result } = renderHook(() => useTheme());
      const nonExistentColor = 'nonExistentColor';
      const primaryColor = result.current.theme.primary;

      // @ts-ignore
      result.current.getColor(nonExistentColor);

      expect(Logger.warn).toHaveBeenCalledWith('Get default color', {
        location: 'useTheme',
      });
      // @ts-ignore

      expect(result.current.getColor(nonExistentColor)).toBe(primaryColor);
    });

    it('should log a warning when no color is provided', () => {
      mockUseTheme.mockReturnValue({ theme: 'dark' });
      const { result } = renderHook(() => useTheme());
      const primaryColor = result.current.theme.primary;

      result.current.getColor();

      expect(Logger.warn).toHaveBeenCalledWith('No color provided', {
        location: 'useTheme',
      });
      expect(result.current.getColor()).toBe(primaryColor);
    });
  });
});
