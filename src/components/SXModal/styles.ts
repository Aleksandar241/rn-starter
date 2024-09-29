import { StyleSheet } from 'react-native';

import { Colors, Spacings, hexColorWithOpacity } from '@theme';

import { Device } from '@constants';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: hexColorWithOpacity(Colors.light.black, '_70'),
  },
  modal: {
    height: Device.HEIGHT * 0.8,
  },
  contentContainer: {
    borderRadius: Spacings.Compact,
    padding: Spacings.Spacious,
    paddingBottom: 0,
    flex: 1,
  },
  closeIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: Spacings.Compact,
  },
});

export default styles;
