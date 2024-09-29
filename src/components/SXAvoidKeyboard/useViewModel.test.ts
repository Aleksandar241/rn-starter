import { renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

const keyboardHeight = 20;
jest.mock('react-native-reanimated', () => ({
  ...jest.requireActual('react-native-reanimated'),
  useAnimatedKeyboard: jest.fn(() => ({ height: { value: keyboardHeight } })),
}));

describe('useViewModel', () => {
  it('should return animated styles', () => {
    const offset = 10;

    const { result } = renderHook(() => useViewModel({ offset }));

    // @ts-ignore
    expect(result.current.animatedStyles.initial.value).toStrictEqual({
      transform: [{ translateY: -keyboardHeight - offset }],
    });
  });
});
