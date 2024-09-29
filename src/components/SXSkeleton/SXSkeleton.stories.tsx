import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXSkeleton from './SXSkeleton.view';
import type { SXSkeletonProps } from './types';

export default {
  title: 'SXSkeleton',
  component: SXSkeleton,
  decorators: [Story => <Story />],
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: 'red',
    padding: 8,
    height: 50,
    width: 50,
  },
});

const Template: StoryFn<SXSkeletonProps> = args => (
  <SXScreen style={styles.container}>
    <SXSkeleton {...args}>
      <View style={styles.view} />
    </SXSkeleton>
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  loading: true,
  speed: 100,
  borderRadius: 10,
};
