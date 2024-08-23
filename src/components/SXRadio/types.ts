import type {FC} from 'react';

import type {Maybe} from '@types';

export type ViewModelProps = {
  selected: Maybe<boolean>;
  onPress: (value: boolean) => void;
};

export type Props = ViewModelProps & {
  testID?: string;
};

export type SXRadioProps = FC<Props>;
