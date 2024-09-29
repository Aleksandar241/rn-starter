import { act, renderHook } from '@testing-library/react-hooks';
import {
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useTheme } from '@hooks';

import { useIndicatorViewModel } from './useViewModel';
import { useSXCarouselViewModel } from './useViewModel';
import useViewModelFactory from './useViewModel';

jest.mock('react-native-reanimated', () => ({
  useSharedValue: jest.fn(),
  useAnimatedScrollHandler: jest.fn(),
  useAnimatedStyle: jest.fn(),
  interpolate: jest.fn(),
  interpolateColor: jest.fn(),
}));

jest.mock('@hooks', () => ({
  useTheme: jest.fn(),
}));

describe('useViewModelFactory', () => {
  jest.mock('./useViewModel', () => ({
    __esModule: true,
    ...jest.requireActual('./useViewModel'),
    useSXCarouselViewModel: jest.fn(),
    useIndicatorViewModel: jest.fn(),
  }));

  const mockUseSXCarouselViewModel =
    useSXCarouselViewModel as jest.MockedFunction<
      typeof useSXCarouselViewModel
    >;
  const mockUseIndicatorViewModel =
    useIndicatorViewModel as jest.MockedFunction<typeof useIndicatorViewModel>;

  it('should return useSXCarouselViewModel when type is "carousel"', () => {
    const { result } = renderHook(() => useViewModelFactory('carousel'));
    expect(result.current).toBe(mockUseSXCarouselViewModel);
  });

  it('should return useIndicatorViewModel when type is "indicator"', () => {
    const { result } = renderHook(() => useViewModelFactory('indicator'));
    expect(result.current).toBe(mockUseIndicatorViewModel);
  });
});

describe('useSXCarouselViewModel', () => {
  const mockUseSharedValue = useSharedValue as jest.MockedFunction<
    typeof useSharedValue
  >;
  const mockUseAnimatedScrollHandler =
    useAnimatedScrollHandler as jest.MockedFunction<
      typeof useAnimatedScrollHandler
    >;
  const mockScrollOffset = { value: 0 } as SharedValue<number>;
  const mockScrollHandler = jest.fn(
    val => (mockScrollOffset.value = val.nativeEvent.contentOffset.x),
  );

  beforeEach(() => {
    mockUseSharedValue.mockReturnValue(mockScrollOffset);
    mockUseAnimatedScrollHandler.mockImplementation(() => mockScrollHandler);
  });

  it('should return scrollOffset and scrollHandler', () => {
    const { result } = renderHook(() => useSXCarouselViewModel());

    expect(result.current.scrollOffset).toBe(mockScrollOffset);
    expect(result.current.scrollHandler).toBe(mockScrollHandler);
  });

  it('should update scrollOffset on scroll event', () => {
    const { result } = renderHook(() => useSXCarouselViewModel());

    const scrollEvent = { contentOffset: { x: 100 } };
    act(() => {
      result.current.scrollHandler({ nativeEvent: scrollEvent } as any);
    });

    expect(mockScrollOffset.value).toBe(100);
  });
});

describe('useIndicatorViewModel', () => {
  let mockGetColor = jest.fn().mockImplementation(color => {
    return color === 'primary' ? 'grey' : 'blue';
  });

  const mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
  const mockUseAnimatedStyle = useAnimatedStyle as jest.MockedFunction<
    typeof useAnimatedStyle
  >;

  beforeEach(() => {
    mockedUseTheme.mockReturnValue({
      getColor: mockGetColor,
      theme: {} as any,
    });
    mockUseAnimatedStyle.mockImplementation(
      jest.fn(() => ({ backgroundColor: 'red', width: 100 })),
    );
  });

  it('should return correct animatedStyle based on scrollOffset and index', () => {
    const scrollOffset = { value: 50 };
    const index = 1;

    const { result } = renderHook(() =>
      useIndicatorViewModel({ scrollOffset, index }),
    );

    expect(mockGetColor).toHaveBeenCalledWith('primary');
    expect(mockGetColor).toHaveBeenCalledWith('secondary');

    expect(result.current.animatedStyle).toEqual({
      backgroundColor: 'red',
      width: 100,
    });
  });
});
