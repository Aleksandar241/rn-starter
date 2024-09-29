import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AuthNavigatorParamsList } from './AuthNavigator/types';
import type { MainNavigatorParamsList } from './MainNavigator/types';

type StackNavigatorScreens<T> = {
  [K in keyof T]: NativeStackScreenProps<T, K>;
};

declare global {
  type MainNavigatorParams = StackNavigatorScreens<MainNavigatorParamsList>;
  type AuthNavigatorParams = StackNavigatorScreens<AuthNavigatorParamsList>;
}
