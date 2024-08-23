import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {SXScreenProps} from './types';
import useViewModel from './useViewModel';

const SXScreen: SXScreenProps = ({
  children,
  edges = ['left', 'right'],
  style,
}): JSX.Element => {
  const {backgroundColor} = useViewModel();
  return (
    <SafeAreaView
      edges={edges}
      style={[styles.container, {backgroundColor}, style]}
      testID="SX-SCREEN">
      {children}
    </SafeAreaView>
  );
};

export default SXScreen;
