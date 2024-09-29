import { StyleSheet } from 'react-native';

import { Radius, Spacings } from '@theme';

const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.Petite,
    borderWidth: 1,
    width: Spacings.Cozy,
    height: Spacings.Cozy,
  },
  icon: {
    width: Spacings.Compact,
    height: Spacings.Compact,
  },
});

export default styles;
