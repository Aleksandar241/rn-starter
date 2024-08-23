import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

import {SXHeader} from '../components/SXHeader';

export const SCREEN_MODAL_OPTIONS: NativeStackNavigationOptions = {
  presentation: 'modal',
  headerShown: false,
};

export const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  header: () => <SXHeader />,
};
