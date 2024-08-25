import {renderHook} from '@testing-library/react-hooks';

import useViewModel from './useViewModel';

jest.mock('@hooks', () => ({
  useTheme: jest.fn(() => ({
    getColor: jest.fn(() => 'mockColor'),
  })),
}));

describe('useViewModel', () => {
  it('should return the background color', () => {
    const onHide = jest.fn();
    const {result} = renderHook(() => useViewModel({onHide}));
    expect(result.current.backgroundColor).toBe('mockColor');
  });
});
