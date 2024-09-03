export type AllValuesToString<T> = {
  [K in keyof T]: T[K] extends object
    ? keyof T[K] extends never
      ? never
      : AllValuesToString<T[K]>
    : T[K] extends string
      ? string
      : T[K];
};
