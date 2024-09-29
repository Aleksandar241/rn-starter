import { createElement, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Launch, useGetLaunchesQuery } from '@graphql';

import { LaunchRoutes } from '../../constants';
import { LaunchCard } from '../LaunchCard';

const useViewModel = () => {
  const navigation =
    useNavigation<MainNavigatorParams['LaunchDetailsScreen']['navigation']>();

  const { data, loading, error, refetch } = useGetLaunchesQuery();
  const launches = data?.launches || [];
  const onLaunchPress = useCallback(
    (id: Launch['id']) =>
      navigation.navigate(LaunchRoutes.LAUNCH_DETAILS_SCREEN, {
        id: id!,
      }),
    [navigation],
  );

  const renderItem = ({ item }: { item: Launch }) =>
    createElement(LaunchCard, {
      data: item,
      onPress: onLaunchPress,
    });

  return {
    launches,
    loading,
    error,
    renderItem,
    refetch,
    onLaunchPress,
  };
};

export default useViewModel;
