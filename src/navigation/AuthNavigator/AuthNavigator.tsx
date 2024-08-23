import React from 'react';

import {Login} from '@features/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREEN_OPTIONS} from '../options';
import {AppRoute} from '../routes';
import type {AuthNavigatorParamsList} from './types';

const AuthStack = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName={AppRoute.LOGIN_SCREEN}>
      <AuthStack.Screen
        name={AppRoute.LOGIN_SCREEN}
        component={Login}
        options={SCREEN_OPTIONS}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
