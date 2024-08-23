import React from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {action} from '@storybook/addon-actions';
import {Meta, StoryFn} from '@storybook/react';

import {SXScreen} from '../SXScreen';
import {SXText} from '../SXText';
import SXTouchable from './SXTouchable.view';
import type {SXTouchableProps} from './types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default {
  title: 'SXTouchable',
  component: SXTouchable,
  decorators: [Story => <Story />],
} as Meta;

const Box = ({text}: {text: string}) => (
  <View style={styles.box}>
    <Text children={text} />
  </View>
);

const CompareButtonsTemplate: StoryFn<SXTouchableProps> = args => {
  let sx = 0;
  let rnClick = 0;
  let pressableClick = 0;
  let button = 0;

  const lockThread = () => {
    for (let i = 0; i < 100; i++) {
      let sum = 0;
      for (let j = 0; j < 1000000; j++) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        sum += Math.random();
      }
    }
  };

  const onPressSX = () => {
    sx++;
    console.log(`onPress SXTouchable ${sx}`);
  };

  const onPressRN = () => {
    rnClick++;
    console.log(`onPress RN ${rnClick}`);
  };

  const onPressPressable = () => {
    pressableClick++;
    console.log(`onPress Pressable ${pressableClick}`);
  };

  const onPressButton = () => {
    button++;
    console.log(`onPress Button ${button}`);
  };

  return (
    <SXScreen style={styles.wrapper}>
      <SXText children="SX Touchable" />
      <SXTouchable {...args} onPress={onPressSX}>
        <Box text={args.children as string} />
      </SXTouchable>
      <SXText children="RN Touchable" />
      <TouchableOpacity onPress={onPressRN}>
        <Box text={args.children as string} />
      </TouchableOpacity>
      <SXText children="RN Pressable" />
      <Pressable onPress={onPressPressable}>
        <Box text={args.children as string} />
      </Pressable>
      <SXText children="Button" />
      <Button title={args.children as string} onPress={onPressButton} />
      <TouchableOpacity onPress={lockThread}>
        <SXText children="Lock Thread" />
      </TouchableOpacity>
    </SXScreen>
  );
};

const Template: StoryFn<SXTouchableProps> = args => (
  <SXScreen style={styles.wrapper}>
    <SXTouchable {...args}>
      <Box text={args.children as string} />
    </SXTouchable>
  </SXScreen>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
  hasThrottle: true,
  disabled: false,
  onPress: action('SXTouchable-pressed'),
};

export const Comparison = CompareButtonsTemplate.bind({});
Comparison.args = {...Default.args};
