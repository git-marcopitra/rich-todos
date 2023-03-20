export type Columns = 'backlog' | 'todo' | 'progress' | 'done';

export interface NewColumnProps {
  newColumn: true;
}

export interface CardData {
  uuid: string;
  name: string;
  status: Columns;
  labels: ReadonlyArray<string>;
}

type OnMoveTask = (columnId: string) => void;

export interface NormalColumnProps {
  id: Columns;
  title: string;
  data: ReadonlyArray<CardData>;
  handleMoveTask: (taskId: string) => OnMoveTask;
}

export type ColumnProps = NewColumnProps | NormalColumnProps;

export interface ColumnTaskProps extends Pick<CardData, 'name' | 'labels'> {
  onMoveTask: OnMoveTask;
}
