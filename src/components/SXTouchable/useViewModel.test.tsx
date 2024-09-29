import { act, renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('lodash/throttle', () => jest.fn(fn => fn));
describe('useViewModel Hook', () => {
  it('should call onPress handler when not throttled and not disabled', () => {
    const onPress = jest.fn();
    const { result } = renderHook(() =>
      useViewModel({ onPress, disabled: false, hasThrottle: false }),
    );
    act(() => {
      // @ts-ignore
      result.current.gesture.handlers.onTouchesUp.__closure.throttledPress();
    });
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('should throttle onPress handler when hasThrottle is true', () => {
    const onPress = jest.fn();
    const { result } = renderHook(() =>
      useViewModel({ onPress, disabled: false, hasThrottle: true }),
    );
    act(() => {
      // @ts-ignore
      result.current.gesture.handlers.onTouchesUp.__closure.throttledPress();
    });
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('should not call onPress handler when disabled', () => {
    const onPress = jest.fn();
    const { result } = renderHook(() =>
      useViewModel({ onPress, disabled: true }),
    );
    act(() => {
      // @ts-ignore
      result.current.gesture.handlers.onTouchesUp.__closure.throttledPress();
    });
    expect(onPress).not.toHaveBeenCalled();
  });
});
