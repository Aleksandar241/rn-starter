import {FC} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ApolloProvider} from '@apollo/client';
import {SXRootModal} from '@components';
import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloService} from '@services';
import '@translations';

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
