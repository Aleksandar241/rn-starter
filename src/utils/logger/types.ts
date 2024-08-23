export type LogOptions = {
  location?: string;
  statusCode?: string | number;
};

export type LoggerProps = {
  log: (message: string, options?: LogOptions) => void;
  warn: (message: string, options?: LogOptions) => void;
  error: (message: string, options?: LogOptions) => void;
};
