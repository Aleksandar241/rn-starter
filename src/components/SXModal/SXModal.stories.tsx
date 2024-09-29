import React, { useState } from 'react';

import { Pressable, StyleSheet, Text } from 'react-native';

import { Meta, StoryFn } from '@storybook/react';

import { SXScreen } from '../SXScreen';
import SXModal from './SXModal.view';
import type { SXModalProps } from './types';

export default {
  title: 'SXModal',
  component: SXModal,
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

const Template: StoryFn<SXModalProps> = args => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Pressable onPress={() => setIsVisible(true)}>
        <Text children="Show Modal" />
      </Pressable>
      <SXModal
        {...args}
        isVisible={isVisible}
        onHide={() => setIsVisible(false)}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  hasCloseIcon: true,
  children: <Text children="Hello World" />,
};
