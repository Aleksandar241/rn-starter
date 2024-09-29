import React, { forwardRef } from 'react';

import { View } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

import { SXIcon, SXIconProps } from '../SXIcon';
import { SXText } from '../SXText';
import styles from './styles';
import { Props } from './types';
import useViewModel from './useViewModel';

const SXTextInput = forwardRef<TextInput, Props>(
  (
    {
      testID = 'SX-TEXT-INPUT',
      useDebounce = false,
      containerStyle,
      leftIcon,
      label,
      error,
      isPassword = false,
      onFocus,
      onBlur,
      onChange,
      placeholder,
      ...rest
    },
    ref,
  ) => {
    const {
      borderColor,
      rightIcon,
      hidePassword,
      placeHolderText,
      onFocusHandler,
      onBlurHandler,
      onChangeHandler,
    } = useViewModel({
      ref,
      isPassword,
      useDebounce,
      rightIcon: rest?.rightIcon,
      placeholder,
      onFocus,
      onBlur,
      onChange,
    });

    return (
      <View style={[styles.container, containerStyle]} testID={testID}>
        {label ? (
          <SXText text={label} font="DEFAULT-COZY/BOLD" style={styles.label} />
        ) : null}
        <View style={[styles.wrapper, { borderColor }, rest?.style]}>
          {leftIcon ? (
            <View style={styles.iconContainer}>
              <SXIcon {...leftIcon} />
            </View>
          ) : null}
          <TextInput
            ref={ref as any}
            {...rest}
            secureTextEntry={hidePassword}
            placeholder={placeHolderText}
            testID="INPUT"
            style={[
              styles.textInput,
              {
                paddingLeft: leftIcon ? 40 : 16,
                paddingRight: rightIcon ? 40 : 16,
              },
            ]}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
          />
          {rightIcon ? (
            <View style={[styles.iconContainer, styles.rightIcon]}>
              <SXIcon {...(rightIcon as SXIconProps)} />
            </View>
          ) : null}
        </View>
        <SXText text={error} color="error" font="DEFAULT-COMPACT/BOLD" />
      </View>
    );
  },
);

SXTextInput.displayName = 'SXTextInput';
export default SXTextInput;
