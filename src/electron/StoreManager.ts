import Store from 'electron-store';

const store = new Store();

export function saveToStore<T>(key: string, value: T) {
  store.set(key, value);
}

export function removeFromStore(key: string) {
  store.delete(key);
}

export function getFromStore(key: string) {
  return store.get(key);
}