import {StyleSheet} from 'react-native';

import {FONTS, Radius, Spacings} from '@theme';

const styles = StyleSheet.create({
  container: {
    gap: Spacings.Petite,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: Radius.Petite,
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    gap: Spacings.Minimal,
    width: '100%',
  },
  textInput: {
    ...FONTS['DEFAULT-COZY/SEMI_BOLD'],
    padding: Spacings.Compact,
    width: '100%',
  },
  label: {
    paddingHorizontal: Spacings.Compact,
  },
  iconContainer: {
    paddingHorizontal: Spacings.Petite,
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    right: 0,
  },
});

export default styles;
