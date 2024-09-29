import { act, renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

describe('useViewModel', () => {
  test('should toggle checked state and call onPress when onPress is called', () => {
    const initialValue = false;
    const onPress = jest.fn();

    const { result } = renderHook(() =>
      useViewModel({ initialValue, onPress }),
    );

    expect(result.current.isChecked).toBe(initialValue);

    act(() => {
      result.current.onPressHandler();
    });

    expect(result.current.isChecked).toBe(!initialValue);
    expect(onPress).toHaveBeenCalledWith(!initialValue);
  });
});
