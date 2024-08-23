import {StorageService} from '@services';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import type {AuthStore} from './types';

const useAuthStore = create(
  persist<AuthStore>(
    set => ({
      isAuth: false,
      setIsAuth: (isAuth: boolean) => set({isAuth}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => StorageService.get('secure')),
    },
  ),
);

export default useAuthStore;
