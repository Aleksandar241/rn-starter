import {createElement} from 'react';
import {Controller} from 'react-hook-form';

import {Maybe} from '@types';

import {BaseProps, FComponent} from './types';

/**
 * Renders a controlled component using the `Controller` component from react-hook-form.
 *
 * @param Component - The name of the field.
 * @param options - The options for the controlled component. The `changeField` option is used to specify the field that will trigger the change event.
 * @returns The rendered controlled component.
 */

export const createControlledComponent = <T extends object>(
  Component: FComponent<T>,
  options: {changeField?: Maybe<keyof T>; valueField?: Maybe<keyof T>} = {
    changeField: 'onChange' as keyof T,
    valueField: null,
  },
) => {
  const ControlledComponent = ({name, control, ...rest}: BaseProps<T>) =>
    createElement(Controller, {
      name,
      control,
      render: ({field, fieldState}) =>
        createElement(Component, {
          onBlur: () => {
            field.onBlur();
            // @ts-ignore
            if (rest.onBlur) {
              // @ts-ignore
              rest.onBlur();
            }
          },
          [options?.changeField as string]: field.onChange,
          error: fieldState.error?.message,
          ...(options?.valueField && {[options.valueField]: field.value}),
          ...(rest as T),
        }),
    });

  ControlledComponent.displayName = `SXControlled${Component.displayName || Component.name}`;

  return ControlledComponent;
};
