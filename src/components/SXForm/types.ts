import type { ComponentType } from 'react';

import type { Control, FieldValues } from 'react-hook-form';

export type BaseProps<T> = {
  name: string;
  control?: Control<FieldValues>;
} & Omit<T, 'onChange' | 'onPress' | 'selected' | 'value' | 'onSwitch'>;

export type FComponent<T> = ComponentType<T>;
