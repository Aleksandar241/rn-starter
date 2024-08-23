import React from 'react';
import {StyleSheet} from 'react-native';

import {action} from '@storybook/addon-actions';
import {Meta, StoryFn} from '@storybook/react';

import {SXScreen} from '../SXScreen';
import SXTextInput from './SXTextInput.view';
import type {SXTextInputProps} from './types';

export default {
  title: 'SXTextInput',
  component: SXTextInput,
  decorators: [Story => <Story />],
  argTypes: {},
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

const Template: StoryFn<SXTextInputProps> = args => {
  return (
    <SXScreen style={styles.container}>
      <SXTextInput {...args} />
    </SXScreen>
  );
};

export const Default = Template.bind({});
Default.args = {
  onFocus: action('TextInput focused'),
  onBlur: action('TextInput blurred'),
  onChange: action('TextInput changed'),
};

export const withLabel = Template.bind({});
withLabel.args = {
  ...Default.args,
  label: 'Label',
};

export const withError = Template.bind({});
withError.args = {
  ...Default.args,
  error: 'Error message',
};

export const withDebounce = Template.bind({});
withDebounce.args = {
  ...Default.args,
  useDebounce: true,
  onChange: action('TextInput changed with debounce'),
};

export const withLeftIcon = Template.bind({});
withLeftIcon.args = {
  ...Default.args,
  leftIcon: {
    icon: 'rocket',
  },
};

export const witRightIcon = Template.bind({});
witRightIcon.args = {
  ...Default.args,
  rightIcon: {
    icon: 'rocket',
  },
};

export const withOtherProps = Template.bind({});
withOtherProps.args = {
  ...Default.args,
  placeholder: 'Placeholder',
};

export const withPassword = Template.bind({});
withPassword.args = {
  ...Default.args,
  isPassword: true,
};
