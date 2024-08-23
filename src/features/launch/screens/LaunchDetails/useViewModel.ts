import {Linking} from 'react-native';

import {useGetLaunchDetailsQuery} from '@graphql';
import {useRoute} from '@react-navigation/native';
import {Logger} from '@utils';

const useViewModel = () => {
  const route = useRoute<MainNavigatorParams['LaunchDetailsScreen']['route']>();
  const id = route.params?.id;
  const {data, loading, error} = useGetLaunchDetailsQuery({variables: {id}});
  const launchDetails = data?.launch;

  const onPressSite = () => {
    try {
      Linking.openURL(launchDetails?.links?.article_link!);
    } catch {
      Logger.error('Cant open link', {
        location: 'LaunchDetails - useViewModel',
      });
    }
  };

  return {
    onPressSite,
    launchDetails,
    loading,
    error,
  };
};

export default useViewModel;
