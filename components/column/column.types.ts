import { Dispatch, SetStateAction } from 'react';

export interface IColumn {
  uuid: string;
  id: string;
  name: string;
  color: string;
}

export interface NewColumnProps {
  newColumn: true;
  setColumns: Dispatch<SetStateAction<ReadonlyArray<IColumn>>>;
}

export interface CardData {
  uuid: string;
  name: string;
  status: string;
  labels: ReadonlyArray<string>;
}

type OnMoveTask = (columnId: string) => void;

export interface NormalColumnProps {
  id: string;
  title: string;
  color: string;
  data: ReadonlyArray<CardData>;
  handleMoveTask: (taskId: string) => OnMoveTask;
}

export type ColumnProps = NewColumnProps | NormalColumnProps;

export interface ColumnTaskProps extends Pick<CardData, 'name' | 'labels'> {
  onMoveTask: OnMoveTask;
}
