import { renderHook } from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

describe('useViewModel', () => {
  it('should render hook correctly', () => {
    const { result } = renderHook(() => useViewModel({}));
  });
});
