import {act, renderHook} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';

import {useLoginForm} from './index';

describe('useLoginForm', () => {
  const onSuccess = jest.fn();
  const onError = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize the form with default values', () => {
    const {result} = renderHook(() => useLoginForm({onSuccess, onError}));
    expect(result.current.getValues('email')).toBe('');
    expect(result.current.getValues('password')).toBe('');
  });

  it('should validate the form correctly', async () => {
    const {result} = renderHook(() => useLoginForm({onSuccess, onError}));

    expect(result.current.formState.isValid).toBeFalsy();

    act(() => {
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', 'aws231@dsadsaAs');
    });

    await act(async () => {
      const res = await result.current.trigger();
      result.current.handleSubmit();

      expect(res).toBeTruthy();
    });

    waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });

    act(() => {
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', 'aw');
    });

    await act(async () => {
      const res = await result.current.trigger();
      expect(res).toBeFalsy();
    });

    waitFor(() => {
      expect(onSuccess).not.toHaveBeenCalled();
    });
  });
});
