import {StyleSheet} from 'react-native';

import {Spacings} from '@theme';

const styles = StyleSheet.create({
  loadingWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    padding: Spacings.Compact,
    gap: Spacings.Compact,
  },
  video: {
    marginBottom: Spacings.Roomy,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default styles;
