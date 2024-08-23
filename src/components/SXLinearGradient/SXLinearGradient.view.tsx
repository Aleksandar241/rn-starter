import {LinearGradient} from 'expo-linear-gradient';

import styles from './styles';
import type {SXLinearGradientProps} from './types';
import useViewModel from './useViewModel';

const SXLinearGradient: SXLinearGradientProps = ({
  testID = 'SX-LINEAR-GRADIENT',
  colors,
  style,
  ...rest
}) => {
  const {mappedColors} = useViewModel({colors});
  return (
    <LinearGradient
      testID={testID}
      colors={mappedColors}
      style={[styles.gradient, style]}
      {...rest}
    />
  );
};

export default SXLinearGradient;
