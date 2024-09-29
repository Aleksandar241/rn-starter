import React, { FC } from 'react';

import { ScrollView } from 'react-native';

import { Logger } from '@utils';

import { SXLoading, SXScreen, SXText } from '@components';

import styles from './styles';
import useViewModel from './useViewModel';

const LaunchDetails: FC<MainNavigatorParams['LaunchDetailsScreen']> = () => {
  const { loading, launchDetails, error, onPressSite } = useViewModel();

  if (loading) {
    return (
      <SXScreen style={styles.loadingWrapper}>
        <SXLoading />
      </SXScreen>
    );
  }

  if (error) {
    Logger.error('Theres error with launch details', {
      location: 'LaunchDetails',
    });
    return <SXText children="Something went wrong" color="error" />;
  }

  return (
    <SXScreen>
      <ScrollView bounces={false} contentContainerStyle={styles.textContainer}>
        <SXText
          children={launchDetails?.mission_name}
          font="DEFAULT-COMPACT/BOLD"
        />
        <SXText
          children={launchDetails?.rocket?.rocket_name}
          font="DEFAULT-COMPACT/LIGHT"
        />
        <SXText
          children={launchDetails?.rocket?.rocket_type}
          font="DEFAULT-COMPACT/LIGHT"
        />
        <SXText
          children={launchDetails?.launch_date_utc}
          font="DEFAULT-COMPACT/REGULAR"
        />
        <SXText
          children={launchDetails?.launch_site?.site_name}
          font="DEFAULT-COMPACT/REGULAR"
          color="secondary"
          style={styles.link}
          onPress={onPressSite}
        />
        <SXText
          children={launchDetails?.details}
          font="DEFAULT-COMPACT/REGULAR"
        />
      </ScrollView>
    </SXScreen>
  );
};

export default LaunchDetails;
