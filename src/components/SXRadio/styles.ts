import {StyleSheet} from 'react-native';

import {Spacings} from '@theme';

const styles = StyleSheet.create({
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: Spacings.Cozy,
    height: Spacings.Cozy,
    borderRadius: Spacings.Cozy / 2,
    padding: Spacings.Petite,
  },
  fill: {
    borderRadius: Spacings.Compact / 2,
    width: Spacings.Compact,
    height: Spacings.Compact,
  },
});

export default styles;
