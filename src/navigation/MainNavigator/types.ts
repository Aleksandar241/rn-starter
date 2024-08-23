import {AppRoute} from '../routes';

export type MainNavigatorParamsList = {
  [AppRoute.LAUNCH_SCREEN]: undefined;
  [AppRoute.LAUNCH_DETAILS_SCREEN]: {id: string};
};
