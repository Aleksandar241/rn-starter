import React from 'react';

import {SXImage, SXText, SXTouchable} from '@components';

import styles from './styles';
import {LaunchCardProps} from './types';
import useViewModel from './useViewModel';

const LaunchCard: LaunchCardProps = ({testID, data, ...rest}) => {
  const {cardStyle, onPressHandler} = useViewModel({...rest, id: data.id});

  return (
    <SXTouchable
      onPress={onPressHandler}
      testID={testID}
      style={[styles.card, cardStyle]}>
      <SXImage
        recyclingKey={data.launch_date_local}
        style={{width: '100%', height: 40}}
        source={
          'https://vastphotos.com/files/uploads/photos/10306/high-resolution-mountains-and-lakes-l.jpg?v=20220712073521'
        }
      />
      <SXText
        font="DEFAULT-COMPACT/BOLD"
        text={{
          t: 'launch.rocketName',
          params: {
            rocket_name: data.rocket?.rocket_name || 'N/A',
          },
        }}
      />
      <SXText
        font="DEFAULT-COMPACT/MEDIUM"
        text={{
          t: 'launch.rocketType',
          params: {
            rocket_type: data.rocket?.rocket_type || 'N/A',
          },
        }}
      />
      <SXText
        font="DEFAULT-PETITE/REGULAR"
        text={{
          t: 'launch.launchDate',
          params: {
            date: data.launch_year || 'N/A',
          },
        }}
      />
      <SXText
        ellipsizeMode="tail"
        style={styles.details}
        children={data.details || 'N/A'}
      />
    </SXTouchable>
  );
};

export default LaunchCard;
