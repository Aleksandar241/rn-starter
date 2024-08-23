import type {LogOptions, LoggerProps} from './types';

const Logger: LoggerProps = Object.create({
  log: (message: string, options: LogOptions = {}) => {
    if (__DEV__) {
      console.log(message, options);
      return;
    }
    // TODO log to third party service
  },
  warn: (message: string, options: LogOptions = {}) => {
    if (__DEV__) {
      console.warn(message, options);
      return;
    }
    // TODO log to third party service
  },
  error: (message: string, options: LogOptions = {}) => {
    if (__DEV__) {
      console.error(message, options);
      return;
    }
    // TODO log to third party service
  },
});

export default Logger;
