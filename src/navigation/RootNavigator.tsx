import React from 'react';

import { useAuthStore } from '@features/auth';

const RootNavigator: React.FC = () => {
  const { isAuth } = useAuthStore();

  if (!isAuth) {
    const { AuthNavigator } = require('./AuthNavigator');

    return <AuthNavigator />;
  }

  const { MainNavigator } = require('./MainNavigator');
  return <MainNavigator />;
};

export default RootNavigator;
