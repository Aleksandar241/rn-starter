import React from 'react';
import {StyleSheet} from 'react-native';

import {action} from '@storybook/addon-actions';
import {Meta, StoryFn} from '@storybook/react';
import {Colors, FONTS} from '@theme';

import {SXScreen} from '../SXScreen';
import SXText from './SXText.view';
import type {SXTextProps} from './types';

export default {
  title: 'SXText',
  component: SXText,
  decorators: [Story => <Story />],
  argTypes: {
    font: {
      control: {
        type: 'select',
      },
      options: Object.keys(FONTS),
    },
    color: {
      control: {
        type: 'select',
      },
      options: Object.keys(Colors.light),
    },
  },
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Template: StoryFn<SXTextProps> = args => (
  <SXScreen style={styles.container}>
    <SXText {...args} />
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  children: 'SPACE-X',
  font: 'DEFAULT-PETITE/REGULAR',
  color: 'primary',
  style: {
    textAlign: 'center',
  },
};

export const WithOptionalProps = Template.bind({});
WithOptionalProps.args = {
  ...Default.args,
  onPress: action('Text pressed'),
};
