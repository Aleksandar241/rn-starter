import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {action} from '@storybook/addon-actions';
import {Meta, StoryFn} from '@storybook/react';

import {SXScreen} from '../SXScreen';
import SXRadio from './SXRadio.view';
import type {SXRadioProps} from './types';

export default {
  title: 'SXRadio',
  component: SXRadio,
  decorators: [Story => <Story />],
  argTypes: {},
} as Meta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Template: StoryFn<SXRadioProps> = args => {
  const [selected, setSelected] = useState(args.selected);

  const onPress = (value: boolean) => {
    args?.onPress(value);
    setSelected(value);
  };
  return (
    <SXScreen style={styles.container}>
      <SXRadio selected={selected} onPress={onPress} />
    </SXScreen>
  );
};

export const Default = Template.bind({});
Default.args = {
  selected: true,
  onPress: action('Radio pressed'),
};
