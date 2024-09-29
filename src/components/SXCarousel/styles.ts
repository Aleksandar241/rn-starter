import { StyleSheet } from 'react-native';

import { Spacings } from '@theme';

const styles = StyleSheet.create({
  indicator: {
    borderRadius: 5,
    height: 10,
    marginHorizontal: 5,
    width: 10,
  },
  paginator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacings.Compact,
  },
});

export default styles;
