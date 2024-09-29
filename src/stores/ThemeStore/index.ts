import { Appearance } from 'react-native';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { StorageService } from '@services';

import type { ThemeStore } from './types';

const useThemeStore = create(
  persist<ThemeStore>(
    set => ({
      theme: Appearance.getColorScheme() || 'light',
      setTheme: theme => set({ theme }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => StorageService.get()),
    },
  ),
);

export default useThemeStore;
