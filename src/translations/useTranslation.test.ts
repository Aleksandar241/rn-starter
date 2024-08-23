import {renderHook} from '@testing-library/react-hooks';

import {useTranslation} from './useTranslation';

describe('useTranslation', () => {
  describe('exists', () => {
    it('should return true if translation key exists', () => {
      const {result} = renderHook(() => useTranslation());
      const exists = result.current.exists;
      const resultExists = exists('common.close');
      expect(resultExists).toBe(true);
    });

    it('should return false if translation key does not exist', () => {
      const {result} = renderHook(() => useTranslation());
      const exists = result.current.exists;
      //@ts-ignore
      const resultExists = exists('nonExistentKey');
      expect(resultExists).toBe(false);
    });
  });
});
