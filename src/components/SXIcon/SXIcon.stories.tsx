import React from 'react';

import { StyleSheet } from 'react-native';

import { Icons } from '@icons';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXIcon from './SXIcon.view';
import { SXIconProps } from './types';

export default {
  title: 'SXIcon',
  component: SXIcon,
  decorators: [Story => <Story />],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: Object.keys(Icons),
    },
  },
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'red',
  },
});

const Template: StoryFn<SXIconProps> = args => (
  <SXScreen style={styles.container}>
    <SXIcon {...args} />
  </SXScreen>
);

export const Default = Template.bind({});

Default.args = {
  icon: 'rocket',
};

export const WithProps = Template.bind({});
WithProps.args = {
  ...Default.args,
  testID: 'icon',
  onPress: action('Icon pressed'),
  width: 24,
  height: 24,
  style: styles.icon,
};
