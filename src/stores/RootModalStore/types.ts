import type {ReactNode} from 'react';

export type RootModalStore = {
  content: ReactNode[];
  push: (content: ReactNode) => void;
  pop: () => void;
};
