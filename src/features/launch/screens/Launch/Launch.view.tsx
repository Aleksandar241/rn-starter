import React, { FC } from 'react';

import { LaunchesList } from '@features/launch/components';

import { SXScreen } from '@components';

const Launch: FC<MainNavigatorParams['LaunchScreen']> = () => {
  return (
    <SXScreen>
      <LaunchesList />
    </SXScreen>
  );
};

export default Launch;
