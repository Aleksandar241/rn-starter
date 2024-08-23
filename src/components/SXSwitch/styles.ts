import {StyleSheet} from 'react-native';

import {Radius, Spacings} from '@theme';

const styles = StyleSheet.create({
  track: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: Spacings.Roomy,
    height: Spacings.Compact,
    borderRadius: Radius.Minimal,
  },
  thumb: {
    borderRadius: Spacings.Cozy / 2,
    width: Spacings.Cozy,
    height: Spacings.Cozy,
  },
  ripple: {
    position: 'absolute',
    borderRadius: Spacings.Roomy / 2,
    width: Spacings.Roomy,
    height: Spacings.Roomy,
  },
  animationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
