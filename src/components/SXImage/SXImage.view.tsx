import React from 'react';

import {Image} from 'expo-image';

import styles from './styles';
import type {SXImageProps} from './types';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const SXImage: SXImageProps = ({
  testID = 'SX-IMAGE',
  recyclingKey,
  source,
  contentFit = 'cover',
}) => {
  return (
    <Image
      testID={testID}
      style={styles.image}
      recyclingKey={recyclingKey}
      source={source}
      placeholder={{blurhash}}
      contentFit={contentFit}
      transition={1000}
      cachePolicy="memory-disk"
    />
  );
};

export default SXImage;
