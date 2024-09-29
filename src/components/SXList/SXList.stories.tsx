import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXList from './SXList.view';
import { SXListProps } from './types';

export default {
  title: 'SXList',
  component: SXList,
  decorators: [Story => <Story />],
  parameters: {
    controls: {
      exclude: ['data', 'horizontal'],
    },
  },
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    padding: 8,
    borderRadius: 8,
    width: 50,
    height: 50,
    backgroundColor: 'red',
    alignSelf: 'center',
    margin: 8,
  },
  contentContainer: {
    backgroundColor: 'blue',
  },
});

const Template: StoryFn<SXListProps<{ id: string }>> = args => (
  <SXScreen style={styles.container}>
    <SXList {...args} />
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  data: Array.from({ length: 10 }).map((_, index) => ({
    id: index.toString(),
  })),
  estimatedItemSize: 50,
  contentContainerStyle: styles.contentContainer,
  renderItem: () => <View style={styles.view} />,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
  horizontal: true,
};
export const withLoading = Template.bind({});
withLoading.args = {
  ...Default.args,
  loading: true,
};

export const withError = Template.bind({});
withError.args = {
  ...Default.args,
  error: { message: 'Error' },
};

export const withNoData = Template.bind({});
withNoData.args = {
  ...Default.args,
  data: [],
};
