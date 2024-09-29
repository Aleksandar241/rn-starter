import React from 'react';

import { StyleSheet } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXLoading from './SXLoading.view';
import type { SXLoadingProps } from './types';

export default {
  title: 'SXLoading',
  component: SXLoading,
  decorators: [Story => <Story />],
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    backgroundColor: 'red',
    padding: 8,
  },
});

const Template: StoryFn<SXLoadingProps> = args => (
  <SXScreen style={styles.container}>
    <SXLoading {...args} />
  </SXScreen>
);

export const Default = Template.bind({});
export const WithStyles = Template.bind({});
WithStyles.args = {
  style: styles.loader,
};
