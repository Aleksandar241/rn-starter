import { act, renderHook } from '@testing-library/react-hooks';

import useRootModalStore from './index';

describe('useRootModalStore', () => {
  beforeEach(() => {
    useRootModalStore.setState({ content: [] });
  });

  it('should initialize with an empty content array', () => {
    const { result } = renderHook(() => useRootModalStore());
    expect(result.current.content).toEqual([]);
  });

  it('should add new content to the array when push is called', () => {
    const { result } = renderHook(() => useRootModalStore());

    act(() => {
      result.current.push('First Content');
    });

    expect(result.current.content).toEqual(['First Content']);

    act(() => {
      result.current.push('Second Content');
    });

    expect(result.current.content).toEqual(['First Content', 'Second Content']);
  });

  it('should remove the last content from the array when pop is called', () => {
    const { result } = renderHook(() => useRootModalStore());

    act(() => {
      result.current.push('First Content');
      result.current.push('Second Content');
    });

    expect(result.current.content).toEqual(['First Content', 'Second Content']);

    act(() => {
      result.current.pop();
    });

    expect(result.current.content).toEqual(['First Content']);

    act(() => {
      result.current.pop();
    });

    expect(result.current.content).toEqual([]);
  });

  it('should not pop from an empty array', () => {
    const { result } = renderHook(() => useRootModalStore());

    act(() => {
      result.current.pop();
    });

    expect(result.current.content).toEqual([]);
  });
});
