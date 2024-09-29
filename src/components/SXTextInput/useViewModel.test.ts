import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
} from 'react-native';

import { act, renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    getColor: jest.fn().mockImplementation(color => color),
  }),
}));

describe('useViewModel', () => {
  const onChangeMock = jest.fn();
  const onFocusMock = jest.fn();
  const onBlurMock = jest.fn();
  const nativeFocusEvent = {} as NativeSyntheticEvent<TextInputFocusEventData>;
  const changeEvent = {
    nativeEvent: { text: 'Hello' },
  } as NativeSyntheticEvent<TextInputChangeEventData>;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should update borderColor on focus', () => {
    const { result } = renderHook(() =>
      useViewModel({
        onChange: onChangeMock,
        onFocus: onFocusMock,
        onBlur: onBlurMock,
      }),
    );

    act(() => {
      result.current.onFocusHandler(nativeFocusEvent);
    });

    expect(result.current.borderColor).toBe('primary');
  });

  it('should update borderColor on blur', () => {
    const { result } = renderHook(() =>
      useViewModel({
        onChange: onChangeMock,
        onFocus: onFocusMock,
        onBlur: onBlurMock,
      }),
    );

    act(() => {
      result.current.onBlurHandler(nativeFocusEvent);
    });

    expect(result.current.borderColor).toBe('secondary');
  });

  it('should call onChange with debounced', () => {
    const onChangeMock = jest.fn();
    const { result } = renderHook(() =>
      useViewModel({ onChange: onChangeMock }),
    );

    act(() => {
      result.current.onChangeHandler(changeEvent);
    });

    expect(onChangeMock).toHaveBeenCalledWith('Hello');
  });

  it('should call onChange with debounce', () => {
    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useViewModel({ onChange: onChangeMock, useDebounce: true }),
    );

    act(() => {
      result.current.onChangeHandler(changeEvent);
    });

    expect(onChangeMock).not.toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(onChangeMock).toHaveBeenCalledWith('Hello');
  });

  it('should toggle password visibility', () => {
    const { result } = renderHook(() =>
      useViewModel({ onChange: onChangeMock, isPassword: true }),
    );

    expect(result.current.hidePassword).toBe(true);
    expect(result.current.rightIcon?.icon).toBe('close');

    act(() => {
      result.current.rightIcon?.onPress?.();
    });

    expect(result.current.hidePassword).toBe(false);
    expect(result.current.rightIcon?.icon).toBe('rocket');
  });

  it('should handle error state', () => {
    const { result } = renderHook(() =>
      useViewModel({
        onChange: onChangeMock,
        error: 'error' as any,
      }),
    );

    expect(result.current.borderColor).toBe('error');
  });

  it('should handle initial hidePassword state', () => {
    const { result } = renderHook(() =>
      useViewModel({ onChange: onChangeMock, isPassword: true }),
    );

    expect(result.current.hidePassword).toBe(true);

    const { result: resultNoPassword } = renderHook(() =>
      useViewModel({ onChange: onChangeMock, isPassword: false }),
    );

    expect(resultNoPassword.current.hidePassword).toBe(false);
  });

  it('should configure rightIcon based on isPassword and hidePassword', () => {
    const { result } = renderHook(() =>
      useViewModel({ onChange: onChangeMock, isPassword: true }),
    );

    expect(result.current.rightIcon?.icon).toBe('close');

    act(() => {
      result.current.rightIcon?.onPress?.();
    });

    expect(result.current.rightIcon?.icon).toBe('rocket');
  });
});
