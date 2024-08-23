import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import {Device} from '@constants';

import Indicator from './Indicator.view';
import styles from './styles';
import type {SXCarouselProps} from './types';
import useViewModelFactory from './useViewModel';

const SXCarousel: SXCarouselProps = ({testID = 'SX-CAROUSEL', children}) => {
  const useSXCarouselModel = useViewModelFactory('carousel');
  const {scrollHandler, scrollOffset} = useSXCarouselModel();

  return (
    <View>
      <Animated.ScrollView
        testID={testID}
        scrollEventThrottle={1}
        horizontal
        snapToInterval={Device.WIDTH}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}>
        {children}
      </Animated.ScrollView>
      <View style={styles.paginator}>
        {Array.isArray(children) &&
          children.map((_, index) => (
            <Indicator
              key={index.toString()}
              index={index}
              scrollOffset={scrollOffset}
            />
          ))}
      </View>
    </View>
  );
};

export default SXCarousel;
