import { useCallback, useState } from 'react';

import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
} from 'react-native';

import type { Color } from '@theme';
import debounce from 'lodash/debounce';

import { useTheme } from '@hooks';

import { TranslationKeys, useTranslation } from '@translations';

import type { ViewModelProps } from './types';

const useViewModel = ({
  onFocus,
  onBlur,
  onChange,
  rightIcon: icon,
  isPassword,
  useDebounce,
  error,
  placeholder,
}: ViewModelProps) => {
  const { translate } = useTranslation();
  const { getColor } = useTheme();

  const [borderColor, setBorderColor] = useState<Color>('secondary');
  const [hidePassword, setHidePassword] = useState(isPassword);

  const onPasswordIconPress = useCallback(() => {
    setHidePassword(prev => !prev);
  }, []);

  const onFocusHandler = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(event);
      setBorderColor('primary');
    },
    [onFocus, setBorderColor],
  );

  const onBlurHandler = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(event);
      setBorderColor('secondary');
    },
    [onBlur, setBorderColor],
  );

  const debouncedOnChange = useCallback(debounce(onChange, 500), [onChange]);

  const onChangeHandler = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const text = event.nativeEvent.text;
      setBorderColor('secondary');
      if (useDebounce) {
        debouncedOnChange(text);
        return;
      }
      onChange(text);
    },
    [useDebounce, onChange, setBorderColor, debouncedOnChange],
  );

  const rightIcon = isPassword
    ? {
        ...(icon ?? {}),
        onPress: onPasswordIconPress,
        icon: hidePassword ? 'close' : 'rocket',
      }
    : icon;

  const placeHolderText = translate({
    text: placeholder as TranslationKeys,
  });

  return {
    isPassword,
    rightIcon,
    hidePassword,
    placeHolderText,
    borderColor: getColor(error ? 'error' : borderColor),
    onFocusHandler,
    onBlurHandler,
    onChangeHandler,
  };
};

export default useViewModel;
