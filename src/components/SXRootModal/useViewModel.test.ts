import {useRootModalStore} from '@stores';
import {act, renderHook} from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('@stores', () => ({
  useRootModalStore: jest.fn(),
}));

const mockUseRootModal = useRootModalStore as jest.MockedFunction<
  typeof useRootModalStore
>;

describe('useViewModel', () => {
  const mockContent = 'Mock Modal Content';
  const mockPop = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the modal content and onHide function', () => {
    mockUseRootModal.mockReturnValueOnce({
      content: [mockContent],
      pop: mockPop,
    });

    const {result} = renderHook(() => useViewModel());

    expect(result.current.content).toBe(mockContent);
    expect(result.current.onHide).toBe(mockPop);
  });

  it('should return undefined for content if there is no modal content', () => {
    mockUseRootModal.mockReturnValueOnce({
      content: [],
      pop: mockPop,
    });

    const {result} = renderHook(() => useViewModel());

    expect(result.current.content).toBeUndefined();
    expect(result.current.onHide).toBe(mockPop);
  });

  it('should call the pop function when onHide is invoked', () => {
    mockUseRootModal.mockReturnValueOnce({
      content: [mockContent],
      pop: mockPop,
    });

    const {result} = renderHook(() => useViewModel());

    act(() => {
      result.current.onHide();
    });

    expect(mockPop).toHaveBeenCalled();
  });
});
