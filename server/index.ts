import { Store } from 'storaj';

export const setStoraj = async (): Promise<void> => {
  try {
    const filePath = 'server/database/db.json';

    const store = new Store(filePath);

    await store.persist();
  } catch (e) {
    console.error('>> error ::: ', e);
  }
};
