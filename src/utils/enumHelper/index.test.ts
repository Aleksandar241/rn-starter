import EnumHelper from '.';

describe('EnumHelper', () => {
  describe('getValues', () => {
    it('should return an array of string values from the given object', () => {
      const data = {
        A: 1,
        B: 2,
        C: 3,
      };

      const result = EnumHelper.getValues(data);

      expect(result).toEqual(['A', 'B', 'C']);
    });

    it('should return an empty array if the given object has no string values', () => {
      const data = {
        1: 'A',
        2: 'B',
        3: 'C',
      };

      const result = EnumHelper.getValues(data);

      expect(result).toEqual([]);
    });
  });
});
