import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import SXScreen from './SXScreen.view';
import type { SXScreenProps } from './types';

export default {
  title: 'SXScreen',
  component: SXScreen,
  decorators: [Story => <Story />],
  argTypes: {
    edges: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
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

const Template: StoryFn<SXScreenProps> = args => (
  <SXScreen {...args}>
    <View style={styles.view} />
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  edges: ['top', 'bottom', 'left', 'right'],
  style: styles.container,
};
