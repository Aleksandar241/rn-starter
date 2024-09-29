import { MMKV } from 'react-native-mmkv';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

import type { IStorage, Storage } from './types';

const DEFAULT_STORAGE = new MMKV();
const SECURE_STORAGE = RNSecureStorage;

const storage: IStorage = {
  setItem: (key: string, value: string) => DEFAULT_STORAGE.set(key, value),
  getItem: (key: string) => DEFAULT_STORAGE.getString(key) ?? null,
  removeItem: (key: string) => DEFAULT_STORAGE.delete(key),
};

const secureStorage: IStorage = {
  setItem: (key: string, value: string) =>
    SECURE_STORAGE.setItem(key, value, { accessible: ACCESSIBLE.ALWAYS }),
  getItem: (key: string) => SECURE_STORAGE.getItem(key),
  removeItem: (key: string) => SECURE_STORAGE.removeItem(key),
};

const get = (type: Storage = 'default') =>
  type === 'secure' ? secureStorage : storage;

export default {
  get,
};
