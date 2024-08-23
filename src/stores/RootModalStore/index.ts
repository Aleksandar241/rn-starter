import {create} from 'zustand';

import type {RootModalStore} from './types';

const useRootModalStore = create<RootModalStore>(set => ({
  content: [],
  push: newContent =>
    set(prevState => ({
      content: [...prevState.content, newContent],
    })),
  pop: () =>
    set(prevState => ({
      content: prevState.content.slice(0, -1),
    })),
}));

export default useRootModalStore;
