import { ItemDefault } from 'storaj';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObject {}

export type MaybeArray<T> = T | Array<T>;

export type ICollection<T> = ReadonlyArray<T & ItemDefault>;
