import React from 'react';

import { StyleSheet } from 'react-native';

import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXCheckbox from './SXCheckbox.view';
import type { SXCheckboxProps } from './types';

export default {
  title: 'SXCheckbox',
  component: SXCheckbox,
  decorators: [Story => <Story />],
  argTypes: {},
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Template: StoryFn<SXCheckboxProps> = args => (
  <SXScreen style={styles.container}>
    <SXCheckbox {...args} />
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  initialValue: true,
  onPress: action('Checkbox pressed'),
};
