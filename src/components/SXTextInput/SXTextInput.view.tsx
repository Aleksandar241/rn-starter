import React, {forwardRef} from 'react';
import {TextInput, View} from 'react-native';

import {SXIcon, SXIconProps} from '../SXIcon';
import SXText from '../SXText/SXText.view';
import styles from './styles';
import {SXTextInputProps, SXTextInputRef} from './types';
import useViewModel from './useViewModel';

const SXTextInput: SXTextInputProps = forwardRef(
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
      ...rest
    },
    ref?: SXTextInputRef,
  ) => {
    const {
      borderColor,
      rightIcon,
      keyboardType,
      hidePassword,
      onFocusHandler,
      onBlurHandler,
      onChangeHandler,
    } = useViewModel({
      isPassword,
      useDebounce,
      rightIcon: rest?.rightIcon,
      onFocus,
      onBlur,
      onChange,
    });

    return (
      <View style={[styles.container, containerStyle]} testID={testID}>
        {label && (
          <SXText
            children={label}
            font="DEFAULT-COZY/BOLD"
            style={styles.label}
          />
        )}
        <View style={[styles.wrapper, {borderColor}, rest?.style]}>
          {leftIcon && (
            <View style={styles.iconContainer}>
              <SXIcon {...leftIcon} />
            </View>
          )}
          <TextInput
            ref={ref}
            {...rest}
            secureTextEntry={hidePassword}
            keyboardType={rest?.keyboardType ?? keyboardType}
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
          {rightIcon && (
            <View style={[styles.iconContainer, styles.rightIcon]}>
              <SXIcon {...(rightIcon as SXIconProps)} />
            </View>
          )}
        </View>
        <SXText
          children={error ?? ''}
          color="error"
          font="DEFAULT-COMPACT/BOLD"
        />
      </View>
    );
  },
);

SXTextInput.displayName = 'SXTextInput';
export default SXTextInput;
