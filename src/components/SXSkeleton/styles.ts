import { StyleSheet } from 'react-native';

import { Radius, Spacings } from '@theme';

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: Radius.Minimal,
    backgroundColor: '#f1f2f3',
    padding: 0,
    margin: 0,
    overflow: 'hidden',
  },
});

export default styles;
