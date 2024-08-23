import {AuthRoutes} from '@features/auth';
import {LaunchRoutes} from '@features/launch';

export const AppRoute = {
  ...LaunchRoutes,
  ...AuthRoutes,
};
