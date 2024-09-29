import { renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

describe('useViewModel', () => {
  it('should generate the element correctly', () => {
    const { result } = renderHook(() =>
      useViewModel({
        testID: 'test-id',
        width: 200,
        height: '50%',
        speed: 150,
        borderRadius: 8,
      }),
    );
    expect(result.current.generateElement).toBeDefined();
  });
});
