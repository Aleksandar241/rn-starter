import { Appearance } from 'react-native';

import { act, renderHook } from '@testing-library/react-hooks';

import { StorageService } from '@services';

import useThemeStore from './index';

jest.mock('react-native', () => ({
  Appearance: {
    getColorScheme: jest.fn(),
  },
}));

jest.mock('@services', () => ({
  StorageService: {
    get: jest.fn().mockReturnValue({
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    }),
  },
}));

const mockAppearance = Appearance as jest.MockedFunction<any>;

describe('useThemeStore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with light theme if no persisted theme and no system preference', () => {
    mockAppearance.getColorScheme.mockReturnValue(null);

    const { result } = renderHook(() => useThemeStore());

    expect(result.current.theme).toBe('light');
  });

  it('should set and persist a new theme', () => {
    const setItemMock = StorageService.get().setItem;

    const { result } = renderHook(() => useThemeStore());

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
    expect(setItemMock).toHaveBeenCalledWith(
      'theme-storage',
      JSON.stringify({ state: { theme: 'dark' }, version: 0 }),
    );
  });
});
