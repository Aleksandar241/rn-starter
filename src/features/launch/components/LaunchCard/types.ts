import type {FC} from 'react';

import type {Launch} from '@graphql';

export type ViewModelProps = {
  id: Launch['id'];
  onPress: (id: Launch['id']) => void;
};

type Props = Omit<ViewModelProps, 'id'> & {
  testID?: string;
  data: Launch;
};

export type LaunchCardProps = FC<Props>;
