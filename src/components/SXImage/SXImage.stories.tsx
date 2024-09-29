import React from 'react';

import { StyleSheet } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXImage from './SXImage.view';
import type { SXImageProps } from './types';

export default {
  title: 'SXImage',
  component: SXImage,
  decorators: [
    Story => (
      <SXScreen style={styles.container}>
        <Story />
      </SXScreen>
    ),
  ],
} as Meta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Template: StoryFn<SXImageProps> = args => <SXImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  source:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8Wgxjo2kB8viojRSLmpBnp5wnJl0WT5VI87F365UNqti5yyj',
};
