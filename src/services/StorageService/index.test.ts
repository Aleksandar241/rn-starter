import StorageService from './index';

describe('StorageService', () => {
  describe('get', () => {
    it('should return the default storage when type is "default"', () => {
      const storage = StorageService.get('default');
      expect(storage.setItem).toBeDefined();
      expect(storage.getItem).toBeDefined();
      expect(storage.removeItem).toBeDefined();
    });

    it('should return the secure storage when type is "secure"', () => {
      const storage = StorageService.get('secure');
      expect(storage.setItem).toBeDefined();
      expect(storage.getItem).toBeDefined();
      expect(storage.removeItem).toBeDefined();
    });

    it('should return the default storage when an invalid type is provided', () => {
      // @ts-ignore
      const storage = StorageService.get('invalid');
      expect(storage.setItem).toBeDefined();
      expect(storage.getItem).toBeDefined();
      expect(storage.removeItem).toBeDefined();
    });
  });
});
