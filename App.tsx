import { FC } from 'react';

import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from '@navigation';

import '@translations';

import { ApolloService } from '@services';

import { SXRootModal } from '@components';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={ApolloService.client}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <RootNavigator />
            <SXRootModal />
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK === 'true') {
  const StoryBook = require('./.storybook/SXStory').default;
  AppEntryPoint = StoryBook;
}

export default AppEntryPoint;
