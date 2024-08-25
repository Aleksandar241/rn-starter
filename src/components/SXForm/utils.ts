import {createElement, memo} from 'react';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
} from 'react-hook-form';

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
  const MemoizedComponent = memo(Component, (prevProps, nextProps) => {
    let value = true;
    // @ts-ignore
    let error = prevProps?.error === nextProps?.error;
    let change = true;
    if (options.valueField) {
      value =
        prevProps?.[options?.valueField] === nextProps?.[options?.valueField];
    }

    if (options.changeField) {
      change =
        prevProps?.[options?.changeField] === nextProps?.[options?.changeField];
    }

    return value && error && change;
  });

  const ControlledComponent = ({name, control, ...restProps}: BaseProps<T>) => {
    const render: any = ({
      field,
      fieldState,
    }: {
      field: ControllerRenderProps<T>;
      fieldState: ControllerFieldState;
    }) => {
      const childProps: any = {
        onBlur: () => {
          field.onBlur();
          // @ts-ignore
          if (restProps.onBlur) {
            // @ts-ignore
            restProps.onBlur();
          }
        },
        [options?.changeField as string]: field.onChange,
        error: fieldState.error?.message,
        ...(options?.valueField && {[options.valueField]: field.value}),
        ...restProps,
      };

      return createElement(MemoizedComponent, childProps);
    };

    return createElement(Controller, {
      name,
      control,
      render,
    });
  };

  ControlledComponent.displayName = `SXControlled${Component.displayName || Component.name}`;

  return ControlledComponent;
};
