import {StyleSheet} from 'react-native';

import {Spacings} from '@theme';

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: Spacings.Titanic,
    borderTopLeftRadius: Spacings.Spacious,
    borderTopRightRadius: Spacings.Spacious,
    justifyContent: 'flex-end',
  },
  contentContainer: {
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
