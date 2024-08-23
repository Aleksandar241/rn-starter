import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Storybook from '.';

const SXStory = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Storybook />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default SXStory;
