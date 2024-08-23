import Animated from 'react-native-reanimated';

import styles from './styles';
import type {IndicatorProps} from './types';
import useViewModelFactory from './useViewModel';

const Indicator: IndicatorProps = props => {
  const useIndicatorModel = useViewModelFactory('indicator');
  const {animatedStyle} = useIndicatorModel(props);

  return <Animated.View style={[styles.indicator, animatedStyle]} />;
};

export default Indicator;
