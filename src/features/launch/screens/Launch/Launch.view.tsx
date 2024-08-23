import React, {FC} from 'react';

import {SXScreen} from '@components';
import {LaunchesList} from '@features/launch/components';

const Launch: FC<MainNavigatorParams['LaunchScreen']> = () => {
  return (
    <SXScreen>
      <LaunchesList />
    </SXScreen>
  );
};

export default Launch;
