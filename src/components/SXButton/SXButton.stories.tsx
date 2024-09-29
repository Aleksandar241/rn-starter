import React from 'react';

import { StyleSheet } from 'react-native';

import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXButton from './SXButton.view';
import { ButtonType, SXButtonProps } from './types';

export default {
  title: 'SXButton',
  component: SXButton,
  decorators: [Story => <Story />],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary'] as ButtonType[],
    },
  },
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'red',
  },
});

const Template: StoryFn<SXButtonProps> = args => (
  <SXScreen style={styles.container}>
    <SXButton {...args} />
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  testID: 'button',
  title: 'SPACE-X',
  type: 'primary',
  onPress: action('Button pressed'),
};
