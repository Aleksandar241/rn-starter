export type AllValuesToString<T> = {
  [K in keyof T]: T[K] extends object
    ? AllValuesToString<T[K]>
    : T[K] extends string
      ? string
      : T[K];
};
