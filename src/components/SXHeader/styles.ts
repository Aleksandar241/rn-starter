import {StyleSheet} from 'react-native';

import {Spacings} from '@theme';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: Spacings.Cozy,
    gap: Spacings.Compact,
  },
});

export default styles;
