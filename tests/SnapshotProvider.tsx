import React, {FC, PropsWithChildren} from 'react';

import {MockedProvider} from '@apollo/client/testing';
import {NavigationContainer} from '@react-navigation/native';

const SnapshotProvider: FC<
  PropsWithChildren<{
    mocks?: any[];
  }>
> = ({children, mocks = []}) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <NavigationContainer>{children}</NavigationContainer>
    </MockedProvider>
  );
};

export default SnapshotProvider;
