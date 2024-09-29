import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import { Device } from '@constants';

import { SXScreen } from '../SXScreen';
import SXCarousel from './SXCarousel.view';
import type { SXCarouselProps } from './types';

export default {
  title: 'SXCarousel',
  component: SXCarousel,
  decorators: [Story => <Story />],
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    height: 200,
  },
  view: {
    width: '100%',
    height: '100%',
  },
  viewWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: Device.WIDTH,
  },
});

const Card = ({ backgroundColor }: { backgroundColor: string }) => (
  <View style={styles.viewWrapper}>
    <View style={[styles.view, { backgroundColor }]} />
  </View>
);

const Template: StoryFn<SXCarouselProps> = _args => (
  <SXScreen style={styles.container}>
    <View style={styles.wrapper}>
      <SXCarousel>
        <Card backgroundColor="orange" />
        <Card backgroundColor="red" />
        <Card backgroundColor="blue" />
        <Card backgroundColor="green" />
      </SXCarousel>
    </View>
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {};
