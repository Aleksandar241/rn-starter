import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import SXHeader from './SXHeader.view';

export default {
  title: 'SXHeader',
  component: SXHeader,
  decorators: [Story => <Story />],
} as Meta;

const Template: StoryFn = () => <SXHeader />;

export const Default = Template.bind({});
