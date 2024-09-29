import React from 'react';

import { StyleSheet } from 'react-native';

import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXSwitch from './SXSwitch.view';
import type { SXSwitchProps } from './types';

export default {
  title: 'SXSwitch',
  component: SXSwitch,
  decorators: [Story => <Story />],
  argTypes: {},
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Template: StoryFn<SXSwitchProps> = args => (
  <SXScreen style={styles.container}>
    <SXSwitch {...args} />
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  initialValue: false,
  onSwitch: action('Switched'),
};
