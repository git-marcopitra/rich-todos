import { ItemDefault } from 'storaj';
import { Store } from 'storaj';
import { Collection } from 'storaj/dist/store';

const getByCollection = <T extends ItemDefault>(
  collection: string
): Collection<T> | undefined => {
  try {
    const { collections } = new Store(process.env.STORE_PATH);

    return collections<T>(collection);
  } catch (e) {
    console.error('>> error ::: ', e);
  }
};

export default getByCollection;
