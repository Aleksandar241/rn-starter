import {act, renderHook} from '@testing-library/react-hooks';
import {Spacings} from '@theme';

import useViewModel from './useViewModel';

describe('useViewModel', () => {
  it('should call onSwitch with tru if initial value is false', () => {
    const initialValue = false;
    const onSwitch = jest.fn();

    const {result} = renderHook(() => useViewModel({initialValue, onSwitch}));

    act(() => {
      // @ts-ignore
      result.current.tap.handlers.onChange.__closure.Switch.__closure.onSwitchHandler(
        !initialValue,
      );
    });

    expect(
      // @ts-ignore
      result.current.animatedThumbStyle.initial.value.transform[0].translateX,
    ).toBe(-Spacings.Compact);
    expect(onSwitch).toHaveBeenCalledWith(!initialValue);
  });
});
