import React from 'react';

import { StyleSheet } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import { SXTextInput } from '../SXTextInput';
import SXAvoidKeyboard from './SXAvoidKeyboard.view';
import type { SXAvoidKeyboardProps } from './types';

export default {
  title: 'SXAvoidKeyboard',
  component: SXAvoidKeyboard,
  decorators: [Story => <Story />],
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'red',
  },
});

const Template: StoryFn<SXAvoidKeyboardProps> = args => (
  <SXScreen style={styles.container}>
    <SXAvoidKeyboard {...args}>
      <SXTextInput onChange={() => {}} leftIcon={{ icon: 'rocket' }} />
    </SXAvoidKeyboard>
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  offset: 0,
};
