import {act, renderHook} from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

describe('useViewModel', () => {
  test('should toggle scale value and call onPress when onPressHandler is called', () => {
    const selected = false;
    const onPress = jest.fn();

    const {result} = renderHook(() => useViewModel({selected, onPress}));

    act(() => {
      result.current.onPressHandler();
    });

    expect(onPress).toHaveBeenCalledWith(!selected);
  });
});
