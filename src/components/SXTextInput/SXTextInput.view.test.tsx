import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import SXTextInput from './SXTextInput.view';

jest.mock('@icons', () => ({
  Icons: {
    rocket: () => <></>,
  },
}));

describe('SXTextInput', () => {
  const onChange = jest.fn();

  it('renders correctly', () => {
    const {getByTestId} = render(<SXTextInput onChange={onChange} />);
    expect(getByTestId('SX-TEXT-INPUT')).toBeTruthy();
    expect(getByTestId('INPUT')).toBeTruthy();
  });

  it('displays label when provided', () => {
    const {getByText} = render(
      <SXTextInput label="Test Label" onChange={onChange} />,
    );
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('displays error message when provided', () => {
    const {getByText} = render(
      <SXTextInput error="Test Error" onChange={onChange} />,
    );
    expect(getByText('Test Error')).toBeTruthy();
  });

  it('renders left and right icons when provided', () => {
    const leftIcon = {icon: 'rocket', size: 20, testID: 'left-icon'};
    const rightIcon = {icon: 'rocket', size: 20, testID: 'right-icon'};
    const {getByTestId} = render(
      <SXTextInput
        leftIcon={leftIcon as any}
        rightIcon={rightIcon as any}
        onChange={onChange}
      />,
    );

    expect(getByTestId('left-icon')).toBeTruthy();
    expect(getByTestId('right-icon')).toBeTruthy();
  });

  it('calls onFocus, onBlur, and onChange handlers correctly', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const {getByTestId} = render(
      <SXTextInput onFocus={onFocus} onBlur={onBlur} onChange={onChange} />,
    );

    const input = getByTestId('INPUT');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();

    fireEvent(input, 'change', {nativeEvent: {text: 'test'}});
    expect(onChange).toHaveBeenCalled();
  });
});
