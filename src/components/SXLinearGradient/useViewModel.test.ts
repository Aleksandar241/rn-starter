import {renderHook} from '@testing-library/react-hooks';
import {Color} from '@theme';

import useViewModel from './useViewModel';

jest.mock('@hooks', () => ({
  useTheme: () => ({
    getColor: jest.fn().mockImplementation(color => color),
  }),
}));

describe('useViewModel', () => {
  it('should map colors using getColor', () => {
    const colors: Color[] = ['primary', 'secondary'];
    const {result} = renderHook(() => useViewModel({colors}));

    expect(result.current.mappedColors).toEqual(colors);
  });
});
