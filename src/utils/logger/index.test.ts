import Logger from './index';

describe('Logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('in development mode', () => {
    beforeAll(() => {
      // @ts-ignore
      global.__DEV__ = true;
    });

    it('should log a message when in development mode', () => {
      const message = 'Test log message';
      const options = { location: 'bar' };

      Logger.log(message, options);

      expect(console.log).toHaveBeenCalledWith(message, options);
    });

    it('should warn a message when in development mode', () => {
      const message = 'Test warn message';
      const options = { location: 'bar' };

      Logger.warn(message, options);

      expect(console.warn).toHaveBeenCalledWith(message, options);
    });

    it('should error a message when in development mode', () => {
      const message = 'Test error message';
      const options = { location: 'bar' };

      Logger.error(message, options);

      expect(console.error).toHaveBeenCalledWith(message, options);
    });
  });

  describe('in production mode', () => {
    beforeAll(() => {
      // @ts-ignore
      global.__DEV__ = false;
    });

    it('should not log a message in production mode', () => {
      const message = 'Test log message';
      const options = { location: 'bar' };

      Logger.log(message, options);

      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not warn a message in production mode', () => {
      const message = 'Test warn message';
      const options = { location: 'bar' };

      Logger.warn(message, options);

      expect(console.warn).not.toHaveBeenCalled();
    });

    it('should not error a message in production mode', () => {
      const message = 'Test error message';
      const options = { location: 'bar' };

      Logger.error(message, options);

      expect(console.error).not.toHaveBeenCalled();
    });
  });
});
