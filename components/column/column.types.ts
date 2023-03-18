export type Columns = 'todo' | 'progress' | 'done';

export interface NewColumnProps {
  newColumn: true;
}

export interface NormalColumnProps {
  id: Columns;
  title: string;
}

export type ColumnProps = NewColumnProps | NormalColumnProps;

export interface ColumnTaskProps {
  name: string;
  labels: ReadonlyArray<string>;
}
