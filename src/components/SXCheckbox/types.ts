import type {FC} from 'react';

export type ViewModelProps = {
  initialValue?: boolean;
  onPress: (value: boolean) => void;
};

export type Props = ViewModelProps & {
  testID?: string;
};

export type SXCheckboxProps = FC<Props>;
