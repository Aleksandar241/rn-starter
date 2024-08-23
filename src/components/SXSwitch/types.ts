import type {FC} from 'react';

import type {Maybe} from '@types';

export type ViewModelProps = {
  initialValue: Maybe<boolean>;
  onSwitch: (value: boolean) => void;
};

export type Props = ViewModelProps & {
  testID?: string;
};

export type SXSwitchProps = FC<Props>;
