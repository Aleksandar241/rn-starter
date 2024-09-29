import { Colors, HexOpacity, hexColorWithOpacity } from './colors';

describe('hexColorWithOpacity', () => {
  it('should return the hex color with opacity', () => {
    const color = Colors.light.primary;
    const opacity = '_50';
    const expectedColorWithOpacity = color + HexOpacity[opacity];

    const result = hexColorWithOpacity(color, opacity);

    expect(result).toBe(expectedColorWithOpacity);
  });
});
