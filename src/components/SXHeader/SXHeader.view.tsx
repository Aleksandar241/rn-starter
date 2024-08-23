import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SXIcon} from '../SXIcon';
import {SXText} from '../SXText';
import styles from './styles';
import useViewModel from './useViewModel';

const SXHeader: React.FC = () => {
  const {backgroundColor} = useViewModel();
  return (
    <SafeAreaView style={[styles.header, {backgroundColor}]}>
      <SXIcon icon="rocket" />
      <SXText children="SPACE X" font="DEFAULT-COMPACT/BOLD" />
    </SafeAreaView>
  );
};

export default SXHeader;
