import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Meta, StoryFn} from '@storybook/react';

import {SXScreen} from '../SXScreen';
import SXLinearGradient from './SXLinearGradient.view';
import type {SXLinearGradientProps} from './types';

export default {
  title: 'SXLinearGradient',
  component: SXLinearGradient,
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

const Template: StoryFn<SXLinearGradientProps> = args => (
  <SXScreen style={styles.container}>
    <SXLinearGradient {...args} />
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  colors: ['primary', 'secondary'],
  style: {
    height: 200,
  },
};
